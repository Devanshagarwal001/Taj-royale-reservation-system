/**
 * routes/health.routes.js
 * -----------------------------------------------------------------------
 * Simple health-check endpoint used to verify that the server, its
 * middleware stack, and (once connected) the database are alive.
 *
 * This is the ONLY route defined in Phase 1 — feature routes
 * (tables, reservations, auth, etc.) will be added in Phase 2 following
 * the same router -> controller -> service -> model pattern.
 * -----------------------------------------------------------------------
 */

const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/", (req, res) => {
  const dbStateMap = ["disconnected", "connected", "connecting", "disconnecting"];

  res.status(200).json({
    success: true,
    message: "API is healthy",
    uptimeSeconds: Math.round(process.uptime()),
    timestamp: new Date().toISOString(),
    database: dbStateMap[mongoose.connection.readyState] || "unknown",
  });
});

module.exports = router;
