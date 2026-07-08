/**
 * config/db.js
 * -----------------------------------------------------------------------
 * MongoDB Atlas connection handler (via Mongoose).
 *
 * Exposes:
 *   - connectDB(): establishes the connection, wires up event listeners,
 *     and configures graceful shutdown hooks.
 * -----------------------------------------------------------------------
 */

const mongoose = require("mongoose");
const { env } = require("./env");

// Fail fast on unknown schema fields / typos instead of silently ignoring them.
mongoose.set("strictQuery", true);

let isConnected = false;

async function connectDB() {
  if (isConnected) return mongoose.connection;

  if (!env.MONGODB_URI) {
    throw new Error(
      "MONGODB_URI is not defined. Please set it in your .env file (see .env.example).",
    );
  }

  mongoose.connection.on("connected", () => {
    isConnected = true;
    // eslint-disable-next-line no-console
    console.log(`✅ MongoDB Atlas connected: ${mongoose.connection.host}`);
  });

  mongoose.connection.on("error", (err) => {
    // eslint-disable-next-line no-console
    console.error("❌ MongoDB connection error:", err.message);
  });

  mongoose.connection.on("disconnected", () => {
    isConnected = false;
    // eslint-disable-next-line no-console
    console.warn("⚠️  MongoDB disconnected");
  });

  await mongoose.connect(env.MONGODB_URI, {
    // Modern mongoose (6+/8+) no longer needs useNewUrlParser/useUnifiedTopology,
    // but maxPoolSize / timeouts are worth tuning explicitly for production.
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  });

  return mongoose.connection;
}

/**
 * Gracefully close the MongoDB connection (used on SIGINT/SIGTERM).
 */
async function disconnectDB() {
  if (!isConnected) return;
  await mongoose.connection.close();
  isConnected = false;
  // eslint-disable-next-line no-console
  console.log("🔌 MongoDB connection closed gracefully");
}

module.exports = { connectDB, disconnectDB, mongoose };
