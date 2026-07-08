/**
 * config/rateLimiter.js
 * -----------------------------------------------------------------------
 * Global rate limiting configuration (express-rate-limit).
 *
 * Protects the API from brute-force and abuse. Values are tunable via
 * .env (RATE_LIMIT_WINDOW_MS / RATE_LIMIT_MAX_REQUESTS). Individual
 * routers (e.g. auth) can layer stricter, route-specific limiters on
 * top of this global one in later phases.
 * -----------------------------------------------------------------------
 */

const rateLimit = require("express-rate-limit");
const { env } = require("./env");

const globalRateLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX_REQUESTS,
  standardHeaders: true, // return rate limit info in RateLimit-* headers
  legacyHeaders: false, // disable deprecated X-RateLimit-* headers
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later.",
  },
});

module.exports = { globalRateLimiter };
