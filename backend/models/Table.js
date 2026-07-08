const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
  {
    tableId: { type: String, required: true, unique: true, trim: true },
    seats: { type: Number, required: true, enum: [2, 4, 6, 8] },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    zone: { type: String, required: true, enum: ["indoor", "outdoor"] },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Table", tableSchema);
