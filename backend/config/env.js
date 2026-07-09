/**
 * config/env.js
 * -----------------------------------------------------------------------
 * Centralized environment variable loader & validator.
 *
 * Every other file in the codebase should import configuration values
 * from THIS module instead of reading `process.env` directly. This gives
 * us a single source of truth, early failure on missing config, and
 * sensible defaults in one place.
 * -----------------------------------------------------------------------
 */

const path = require("path");
const dotenv = require("dotenv");

// Load variables from .env into process.env (no-op in environments where
// real env vars are injected directly, e.g. most PaaS/containers).
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

// Variables that MUST be present for the app to function correctly.
const REQUIRED_IN_PRODUCTION = ["MONGODB_URI", "COOKIE_SECRET", "CLIENT_ORIGINS"];

const NODE_ENV = process.env.NODE_ENV || "development";

const env = {
  NODE_ENV,
  IS_PRODUCTION: NODE_ENV === "production",
  IS_DEVELOPMENT: NODE_ENV === "development",
  IS_TEST: NODE_ENV === "test",

  PORT: Number(process.env.PORT) || 5000,
  API_BASE_URL: process.env.API_BASE_URL || "http://localhost:5000",

  MONGODB_URI: process.env.MONGODB_URI || "",

  CLIENT_ORIGINS: (process.env.CLIENT_ORIGINS || "http://localhost:5173,https://taj-royale-reservation-system.vercel.app,http://localhost:8080")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),

  COOKIE_SECRET: process.env.COOKIE_SECRET || "dev_only_insecure_secret",
  JWT_SECRET: process.env.JWT_SECRET || process.env.COOKIE_SECRET || "dev_only_insecure_jwt_secret",

  RATE_LIMIT_WINDOW_MS: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  RATE_LIMIT_MAX_REQUESTS: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,

  LOG_FORMAT: process.env.LOG_FORMAT || (NODE_ENV === "production" ? "combined" : "dev"),
};

/**
 * Fail fast: in production, refuse to boot the server if critical
 * configuration is missing. In development we only warn, so new
 * contributors can get the server running quickly.
 */
function validateEnv() {
  const missing = REQUIRED_IN_PRODUCTION.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    const message = `Missing required environment variables: ${missing.join(", ")}`;
    if (env.IS_PRODUCTION) {
      throw new Error(message);
    } else {
      // eslint-disable-next-line no-console
      console.warn(`⚠️  ${message} (continuing because NODE_ENV=${NODE_ENV})`);
    }
  }
}

module.exports = { env, validateEnv };
