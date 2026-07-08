/**
 * utils/catchAsync.js
 * -----------------------------------------------------------------------
 * Wraps async Express route/controller handlers so that any rejected
 * promise is automatically forwarded to next(err) — removing the need
 * for repetitive try/catch blocks in every controller (Phase 2+).
 *
 * Example:
 *   router.get("/tables", catchAsync(tableController.getAllTables));
 * -----------------------------------------------------------------------
 */

const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = catchAsync;
