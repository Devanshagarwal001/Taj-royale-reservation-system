/**
 * server.js
 * -----------------------------------------------------------------------
 * Application entry point.
 *
 * Responsibilities:
 *   1. Validate environment configuration
 *   2. Connect to MongoDB Atlas
 *   3. Start the HTTP server (using the Express app from app.js)
 *   4. Handle graceful shutdown + unexpected crashes
 * -----------------------------------------------------------------------
 */

const { env, validateEnv } = require("./config/env");
const { connectDB, disconnectDB } = require("./config/db");
const { seedTables } = require("./config/seedTables");
const logger = require("./utils/logger");
const app = require("./app");

let server;

async function start() {
  validateEnv();

  // In Phase 1 the DB may not be configured yet (no MONGODB_URI in .env).
  // We attempt to connect, but don't crash local/dev boot if it fails —
  // production, however, should fail fast so we never serve traffic
  // without a working database.
  try {
    await connectDB();
    await seedTables();
  } catch (err) {
    logger.error("Failed to connect to MongoDB:", err.message);
    if (env.IS_PRODUCTION) {
      process.exit(1);
    } else {
      logger.warn("Continuing without a database connection (development mode).");
    }
  }

  server = app.listen(env.PORT, () => {
    logger.info(`🚀 Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
    logger.info(`   Health check: ${env.API_BASE_URL}/api/health`);
  });
}

/**
 * Graceful shutdown: stop accepting new connections, let in-flight
 * requests finish, close the DB connection, then exit.
 */
async function shutdown(signal) {
  logger.info(`${signal} received. Shutting down gracefully...`);

  if (server) {
    server.close(async () => {
      await disconnectDB();
      logger.info("👋 Server closed. Bye!");
      process.exit(0);
    });
  } else {
    process.exit(0);
  }

  // Force-exit if shutdown hangs for too long.
  setTimeout(() => process.exit(1), 10000).unref();
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

// Safety nets for programming errors that would otherwise crash silently.
process.on("unhandledRejection", (reason) => {
  logger.error("Unhandled Promise Rejection:", reason);
  // Let the process crash intentionally so a process manager (PM2, Docker,
  // etc.) can restart it in a clean state — swallowing this would leave
  // the app in an unknown state.
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  logger.error("Uncaught Exception:", err);
  process.exit(1);
});

start();
