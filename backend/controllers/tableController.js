const Table = require("../models/Table");
const Reservation = require("../models/Reservation");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

exports.getTables = catchAsync(async (req, res) => {
  const { date, time, zone } = req.query;

  if (!date || !time) {
    throw new AppError("date and time query parameters are required", 400);
  }

  const filter = zone ? { zone } : {};
  const tables = await Table.find(filter).sort({ tableId: 1 });

  const reservedTableIds = await Reservation.find({
    date,
    time,
    status: "CONFIRMED",
  }).distinct("tableId");

  const reservedSet = new Set(reservedTableIds);

  const data = tables.map((table) => ({
    id: table.tableId,
    seats: table.seats,
    x: table.x,
    y: table.y,
    zone: table.zone,
    status: reservedSet.has(table.tableId) ? "reserved" : "available",
  }));

  res.status(200).json({ success: true, data });
});

exports.getTableStats = catchAsync(async (req, res) => {
  const total = await Table.countDocuments();
  const today = new Date().toISOString().slice(0, 10);

  const todayReservations = await Reservation.countDocuments({
    date: today,
    status: "CONFIRMED",
  });

  const reservedToday = await Reservation.find({
    date: today,
    status: "CONFIRMED",
  }).distinct("tableId");

  res.status(200).json({
    success: true,
    data: {
      total,
      reserved: reservedToday.length,
      available: total - reservedToday.length,
      todayReservations,
    },
  });
});
