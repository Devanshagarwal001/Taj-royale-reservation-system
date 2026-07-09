/**
 * app.js
 * -----------------------------------------------------------------------
 * Configures and exports the Express application instance.
 *
 * Responsibilities of this file:
 *   - Wire up all global middleware (security, parsing, logging, etc.)
 *   - Mount routers
 *   - Register the 404 handler + centralized error handler (must be last)
 *
 * This file does NOT start the HTTP server or connect to the database —
 * that's server.js's job. Keeping them separate makes `app` easy to
 * import directly in integration tests (e.g. with supertest) without
 * spinning up a real network listener.
 * -----------------------------------------------------------------------
 */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const cookieParser = require("cookie-parser");

const { env } = require("./config/env");
const corsOptions = require("./config/corsOptions");
const { globalRateLimiter } = require("./config/rateLimiter");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const healthRoutes = require("./routes/health.routes");

const app = express();

// Trust the first proxy hop (needed on most PaaS/hosts e.g. Render, Railway,
// behind an Nginx/Cloudflare LB) so req.ip / rate limiting see the real client IP.
app.set("trust proxy", 1);

/* ------------------------------------------------------------------ */
/* Security                                                            */
/* ------------------------------------------------------------------ */
app.use(helmet());
app.use(cors({
  origin: env.FRONTEND_URL,
  credentials: true
}));
app.use(globalRateLimiter);

/* ------------------------------------------------------------------ */
/* Request parsing                                                     */
/* ------------------------------------------------------------------ */
app.use(express.json({ limit: "10kb" })); // parse JSON bodies; cap payload size
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser(env.COOKIE_SECRET));

/* ------------------------------------------------------------------ */
/* Performance                                                         */
/* ------------------------------------------------------------------ */
app.use(compression());

/* ------------------------------------------------------------------ */
/* Logging                                                             */
/* ------------------------------------------------------------------ */
if (!env.IS_TEST) {
  app.use(morgan(env.LOG_FORMAT));
}

/* ------------------------------------------------------------------ */
/* Static files (e.g. uploaded images served back to the frontend)     */
/* ------------------------------------------------------------------ */
app.use("/uploads", express.static("uploads"));

/* ------------------------------------------------------------------ */
/* Routes                                                               */
/* ------------------------------------------------------------------ */
app.use("/api/health", healthRoutes);
app.use("/api/tables", require("./routes/table.routes"));
app.use("/api/reservations", require("./routes/reservation.routes"));
app.use("/api/auth", require("./routes/auth.routes"));

/* ------------------------------------------------------------------ */
/* 404 + centralized error handling (order matters — keep these last)  */
/* ------------------------------------------------------------------ */
app.use(notFound);
app.use(errorHandler);

module.exports = app;
