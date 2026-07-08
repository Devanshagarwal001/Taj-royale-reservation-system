/**
 * middleware/errorHandler.js
 * -----------------------------------------------------------------------
 * Centralized error handling middleware. This is the SINGLE place where
 * errors are formatted into an HTTP response. All controllers/services
 * (Phase 2+) should simply `throw` an AppError (or let Mongoose errors
 * bubble up via catchAsync) — this middleware takes care of the rest.
 *
 * Must be the LAST middleware registered in app.js (4 args = Express
 * recognizes it as an error handler).
 * -----------------------------------------------------------------------
 */

const { env } = require("../config/env");
const logger = require("../utils/logger");
const AppError = require("../utils/AppError");

/**
 * Translate known third-party error shapes (Mongoose, JWT, etc.) into
 * our own AppError so the response format stays consistent.
 */
function normalizeError(err) {
  // Mongoose: invalid ObjectId cast, e.g. GET /api/tables/not-a-valid-id
  if (err.name === "CastError") {
    return new AppError(`Invalid value for field '${err.path}': ${err.value}`, 400);
  }

  // Mongoose: duplicate unique key (e.g. duplicate email)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0];
    return new AppError(`Duplicate value for field '${field}'. Please use another value.`, 409);
  }

  // Mongoose: schema validation failure
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(". ");
    return new AppError(message, 400);
  }

  // JSON body parsing errors from express.json()
  if (err.type === "entity.parse.failed") {
    return new AppError("Malformed JSON in request body", 400);
  }

  if (err.name === "JsonWebTokenError") {
    return new AppError("Invalid token. Please sign in again.", 401);
  }

  if (err.name === "TokenExpiredError") {
    return new AppError("Your session has expired. Please sign in again.", 401);
  }

  return err;
}

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const normalized = normalizeError(err);

  const statusCode = normalized.statusCode || 500;
  const status = normalized.status || "error";
  const isOperational = normalized.isOperational === true;

  // Always log server-side; log full stack for unexpected (non-operational) errors.
  if (!isOperational) {
    logger.error(`${req.method} ${req.originalUrl} ->`, err.stack || err);
  } else {
    logger.warn(`${req.method} ${req.originalUrl} -> ${statusCode} ${normalized.message}`);
  }

  res.status(statusCode).json({
    success: false,
    status,
    message: isOperational || !env.IS_PRODUCTION ? normalized.message : "Something went wrong. Please try again later.",
    // Stack traces are extremely useful in dev but must never leak in production.
    ...(env.IS_PRODUCTION ? {} : { stack: err.stack }),
  });
}

module.exports = errorHandler;
