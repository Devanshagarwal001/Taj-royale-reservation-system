/**
 * utils/AppError.js
 * -----------------------------------------------------------------------
 * Custom operational error class.
 *
 * Use this (or a subclass) anywhere in controllers/services to throw
 * errors with an explicit HTTP status code. The centralized error
 * handler middleware knows how to serialize these consistently.
 *
 * Example:
 *   throw new AppError("Table not found", 404);
 * -----------------------------------------------------------------------
 */

class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // distinguishes expected errors from programming bugs

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
