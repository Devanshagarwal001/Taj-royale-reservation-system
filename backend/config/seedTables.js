const Table = require("../models/Table");
const logger = require("../utils/logger");

const DEFAULT_TABLES = [
  { tableId: "T1", seats: 2, status: "available", x: 8, y: 15, zone: "indoor" },
  { tableId: "T2", seats: 2, status: "available", x: 22, y: 15, zone: "indoor" },
  { tableId: "T3", seats: 4, status: "available", x: 40, y: 18, zone: "indoor" },
  { tableId: "T4", seats: 4, status: "available", x: 60, y: 18, zone: "indoor" },
  { tableId: "T5", seats: 6, status: "available", x: 82, y: 18, zone: "indoor" },
  { tableId: "T6", seats: 2, status: "available", x: 10, y: 45, zone: "indoor" },
  { tableId: "T7", seats: 8, status: "available", x: 45, y: 48, zone: "indoor" },
  { tableId: "T8", seats: 4, status: "available", x: 80, y: 45, zone: "indoor" },
  { tableId: "T9", seats: 2, status: "available", x: 12, y: 78, zone: "outdoor" },
  { tableId: "T10", seats: 4, status: "available", x: 32, y: 78, zone: "outdoor" },
  { tableId: "T11", seats: 6, status: "available", x: 58, y: 80, zone: "outdoor" },
  { tableId: "T12", seats: 2, status: "available", x: 82, y: 78, zone: "outdoor" },
];

async function seedTables() {
  const count = await Table.countDocuments();
  if (count > 0) return;

  await Table.insertMany(
    DEFAULT_TABLES.map(({ tableId, seats, x, y, zone }) => ({ tableId, seats, x, y, zone })),
  );
  logger.info(`Seeded ${DEFAULT_TABLES.length} restaurant tables`);
}

module.exports = { seedTables };
