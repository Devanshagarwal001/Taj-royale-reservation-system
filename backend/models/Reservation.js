// 
const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    // Booking Information
    bookingId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // Customer Information
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    // Reservation Details
    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    // Reservation Duration (NEW)
    duration: {
      type: Number,
      default: 120, // minutes (2 hours)
    },

    // Start & End Time (NEW)
    startTime: {
      type: Date,
      required: true,
    },

    endTime: {
      type: Date,
      required: true,
    },

    guests: {
      type: Number,
      required: true,
      min: 1,
      max: 8,
    },

    occasion: {
      type: String,
      required: true,
      trim: true,
    },

    seating: {
      type: String,
      enum: ["indoor", "outdoor"],
      required: true,
    },

    specialRequest: {
      type: String,
      default: "",
      trim: true,
    },

    tableId: {
      type: String,
      required: true,
      trim: true,
    },

    // Reservation Status
    status: {
      type: String,
      enum: [
        "PENDING",
        "CONFIRMED",
        "CHECKED_IN",
        "COMPLETED",
        "CANCELLED",
        "NO_SHOW",
      ],
      default: "CONFIRMED",
    },

    // QR Code (NEW)
    qrCode: {
      type: String,
      default: "",
    },

    // QR Management URL (NEW)
    qrLink: {
      type: String,
      default: "",
    },

    // Can customer edit reservation?
    editable: {
      type: Boolean,
      default: true,
    },

    // Payment Status (Future Use)
    paymentStatus: {
      type: String,
      enum: ["PENDING", "PAID", "REFUNDED"],
      default: "PENDING",
    },

    // Customer Checked In?
    checkedIn: {
      type: Boolean,
      default: false,
    },

    // User Account
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// =========================
// INDEXES
// =========================

reservationSchema.index({
  tableId: 1,
  startTime: 1,
  endTime: 1,
  status: 1,
});

reservationSchema.index({
  email: 1,
  createdAt: -1,
});

module.exports = mongoose.model("Reservation", reservationSchema);