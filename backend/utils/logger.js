/**
 * utils/logger.js
 * -----------------------------------------------------------------------
 * Minimal, dependency-free logger wrapper.
 *
 * Kept intentionally simple for Phase 1. If the project later needs
 * structured/JSON logging (e.g. for a log aggregator), swap the
 * implementation here (winston/pino) without touching call sites.
 * -----------------------------------------------------------------------
 */

/* eslint-disable no-console */
const { env } = require("../config/env");

const logger = {
  info: (...args) => console.log("[INFO]", ...args),
  warn: (...args) => console.warn("[WARN]", ...args),
  error: (...args) => console.error("[ERROR]", ...args),
  debug: (...args) => {
    if (!env.IS_PRODUCTION) console.debug("[DEBUG]", ...args);
  },
};

module.exports = logger;
