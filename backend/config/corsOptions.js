/**
 * config/corsOptions.js
 * -----------------------------------------------------------------------
 * CORS configuration.
 *
 * Only origins listed in CLIENT_ORIGINS (.env) are allowed to make
 * cross-origin requests (including credentials/cookies). This is safer
 * than a wildcard "*" origin, especially since we use cookies.
 * -----------------------------------------------------------------------
 */

const { env } = require("./env");

const corsOptions = {
  origin(origin, callback) {
    // Allow non-browser tools (curl, Postman, server-to-server) which send no Origin header.
    if (!origin) return callback(null, true);

    if (env.CLIENT_ORIGINS.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS: Origin '${origin}' is not allowed`));
  },
  credentials: true, // allow cookies to be sent/received
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  optionsSuccessStatus: 204,
};

module.exports = corsOptions;
