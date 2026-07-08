/**
 * middleware/notFound.js
 * -----------------------------------------------------------------------
 * Catches any request that doesn't match a defined route and forwards a
 * consistent 404 AppError to the centralized error handler.
 *
 * Must be registered AFTER all routes but BEFORE the error handler.
 * -----------------------------------------------------------------------
 */

const AppError = require("../utils/AppError");

function notFound(req, res, next) {
  next(new AppError(`Route not found - ${req.method} ${req.originalUrl}`, 404));
}

module.exports = notFound;
