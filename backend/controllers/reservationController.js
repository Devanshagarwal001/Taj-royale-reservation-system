// const Reservation = require("../models/Reservation");
// const Table = require("../models/Table");
// const catchAsync = require("../utils/catchAsync");
// const AppError = require("../utils/AppError");
// const generateBookingId = require("../utils/generateBookingId");

// exports.createReservation = catchAsync(async (req, res) => {
//   const {
//     name,
//    email,
//     phone,
//     date,
//     time,
//     guests,
//     occasion,
//     seating,
//     specialRequest,
//     tableId,
//   } = req.body;

//   if (!name || !email || !phone || !date || !time || !guests || !occasion || !seating || !tableId) {
//     throw new AppError("Please provide all required reservation fields", 400);
//   }

//   const table = await Table.findOne({ tableId });
//   if (!table) {
//     throw new AppError(`Table ${tableId} not found`, 404);
//   }

//   if (table.zone !== seating) {
//     throw new AppError(`Table ${tableId} is not in the ${seating} zone`, 400);
//   }

//   if (table.seats < guests) {
//     throw new AppError(`Table ${tableId} only seats ${table.seats} guests`, 400);
//   }

//   const conflict = await Reservation.findOne({
//     tableId,
//     date,
//     time,
//     status: "CONFIRMED",
//   });

//   if (conflict) {
//     throw new AppError("This table is already reserved for the selected date and time", 409);
//   }

//   const reservation = await Reservation.create({
//     bookingId: generateBookingId(),
//     name,
//     email,
//     phone,
//     date,
//     time,
//     guests,
//     occasion,
//     seating,
//     specialRequest: specialRequest || "",
//     tableId,
//     user: req.user?._id || null,
//   });

//   res.status(201).json({ success: true, data: reservation });
// });

// exports.getReservations = catchAsync(async (req, res) => {
//   const filter = {};

//   if (req.user) {
//     filter.email = req.user.email;
//   } else if (req.query.email) {
//     filter.email = req.query.email.toLowerCase();
//   } else {
//     throw new AppError("Please sign in or provide an email to view reservations", 401);
//   }

//   const reservations = await Reservation.find(filter).sort({ date: -1, time: -1 });

//   res.status(200).json({ success: true, data: reservations });
// });

// exports.getAllReservations = catchAsync(async (req, res) => {
//   const reservations = await Reservation.find()
//     .sort({ createdAt: -1 })
//     .limit(50);

//   res.status(200).json({ success: true, data: reservations });
// });

// exports.getReservation = catchAsync(async (req, res) => {
//   const reservation = await Reservation.findOne({ bookingId: req.params.bookingId });

//   if (!reservation) {
//     throw new AppError("Reservation not found", 404);
//   }

//   res.status(200).json({ success: true, data: reservation });
// });

// exports.updateReservation = catchAsync(async (req, res) => {
//   const reservation = await Reservation.findOne({ bookingId: req.params.bookingId });

//   if (!reservation) {
//     throw new AppError("Reservation not found", 404);
//   }

//   if (req.user && reservation.email !== req.user.email) {
//     throw new AppError("You can only update your own reservations", 403);
//   }

//   const allowed = ["status"];
//   const updates = {};
//   for (const key of allowed) {
//     if (req.body[key] !== undefined) updates[key] = req.body[key];
//   }

//   Object.assign(reservation, updates);
//   await reservation.save();

//   res.status(200).json({ success: true, data: reservation });
// });
// const Reservation = require("../models/Reservation");
// const Table = require("../models/Table");
// const catchAsync = require("../utils/catchAsync");
// const AppError = require("../utils/AppError");
// const generateBookingId = require("../utils/generateBookingId");

// exports.createReservation = catchAsync(async (req, res) => {
//   const {
//     name,
//     email,
//     phone,
//     date,
//     time,
//     guests,
//     occasion,
//     seating,
//     specialRequest,
//     tableId,
//   } = req.body;

//   if (
//     !name ||
//     !email ||
//     !phone ||
//     !date ||
//     !time ||
//     !guests ||
//     !occasion ||
//     !seating ||
//     !tableId
//   ) {
//     throw new AppError("Please provide all required reservation fields", 400);
//   }

//   const table = await Table.findOne({ tableId });

//   if (!table) {
//     throw new AppError(`Table ${tableId} not found`, 404);
//   }

//   if (table.zone !== seating) {
//     throw new AppError(`Table ${tableId} is not in the ${seating} zone`, 400);
//   }

//   if (table.seats < guests) {
//     throw new AppError(
//       `Table ${tableId} only seats ${table.seats} guests`,
//       400
//     );
//   }

//   // ======================================
//   // Create Start Time & End Time
//   // ======================================

//   const startTime = new Date(`${date}T${time}:00`);

//   const duration = 120; // 2 hours

//   const endTime = new Date(startTime.getTime() + duration * 60 * 1000);

//   // ======================================
//   // Check overlapping reservation
//   // ======================================

//   const conflict = await Reservation.findOne({
//     tableId,
//     status: {
//       $in: ["CONFIRMED", "CHECKED_IN"],
//     },
//     startTime: {
//       $lt: endTime,
//     },
//     endTime: {
//       $gt: startTime,
//     },
//   });

//   if (conflict) {
//     throw new AppError(
//       "This table is already reserved during the selected time slot.",
//       409
//     );
//   }

//   // ======================================
//   // Create Reservation
//   // ======================================

//   const reservation = await Reservation.create({
//     bookingId: generateBookingId(),

//     name,
//     email,
//     phone,

//     date,
//     time,

//     duration,
//     startTime,
//     endTime,

//     guests,
//     occasion,
//     seating,
//     specialRequest: specialRequest || "",
//     tableId,

//     status: "CONFIRMED",

//     user: req.user?._id || null,
//   });

//   res.status(201).json({
//     success: true,
//     data: reservation,
//   });
// });

// exports.getReservations = catchAsync(async (req, res) => {
//   const filter = {};

//   if (req.user) {
//     filter.email = req.user.email;
//   } else if (req.query.email) {
//     filter.email = req.query.email.toLowerCase();
//   } else {
//     throw new AppError(
//       "Please sign in or provide an email to view reservations",
//       401
//     );
//   }

//   const reservations = await Reservation.find(filter).sort({
//     startTime: -1,
//   });

//   res.status(200).json({
//     success: true,
//     data: reservations,
//   });
// });

// exports.getAllReservations = catchAsync(async (req, res) => {
//   const reservations = await Reservation.find()
//     .sort({ createdAt: -1 })
//     .limit(100);

//   res.status(200).json({
//     success: true,
//     data: reservations,
//   });
// });

// exports.getReservation = catchAsync(async (req, res) => {
//   const reservation = await Reservation.findOne({
//     bookingId: req.params.bookingId,
//   });

//   if (!reservation) {
//     throw new AppError("Reservation not found", 404);
//   }

//   res.status(200).json({
//     success: true,
//     data: reservation,
//   });
// });

// exports.updateReservation = catchAsync(async (req, res) => {
//   const reservation = await Reservation.findOne({
//     bookingId: req.params.bookingId,
//   });

//   if (!reservation) {
//     throw new AppError("Reservation not found", 404);
//   }

//   if (req.user && reservation.email !== req.user.email) {
//     throw new AppError(
//       "You can only update your own reservations",
//       403
//     );
//   }

//   const allowed = ["status"];

//   allowed.forEach((field) => {
//     if (req.body[field] !== undefined) {
//       reservation[field] = req.body[field];
//     }
//   });

//   await reservation.save();

//   res.status(200).json({
//     success: true,
//     data: reservation,
//   });
// });
const Reservation = require("../models/Reservation");
const Table = require("../models/Table");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const generateBookingId = require("../utils/generateBookingId");

exports.createReservation = catchAsync(async (req, res) => {
  const {
    name,
    email,
    phone,
    date,
    time,
    guests,
    occasion,
    seating,
    specialRequest,
    tableId,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !date ||
    !time ||
    !guests ||
    !occasion ||
    !seating ||
    !tableId
  ) {
    throw new AppError("Please provide all required reservation fields", 400);
  }

  const table = await Table.findOne({ tableId });

  if (!table) {
    throw new AppError(`Table ${tableId} not found`, 404);
  }

  if (table.zone !== seating) {
    throw new AppError(`Table ${tableId} is not in the ${seating} zone`, 400);
  }

  if (table.seats < guests) {
    throw new AppError(
      `Table ${tableId} only seats ${table.seats} guests`,
      400
    );
  }

  // Reservation start & end time
  const startTime = new Date(`${date}T${time}:00`);
  const duration = 120;
  const endTime = new Date(startTime.getTime() + duration * 60 * 1000);

  // Check overlap
  const conflict = await Reservation.findOne({
    tableId,
    status: {
      $in: ["CONFIRMED", "CHECKED_IN"],
    },
    startTime: {
      $lt: endTime,
    },
    endTime: {
      $gt: startTime,
    },
  });

  if (conflict) {
    throw new AppError(
      "This table is already reserved during the selected time slot.",
      409
    );
  }

  const reservation = await Reservation.create({
    bookingId: generateBookingId(),
    name,
    email,
    phone,
    date,
    time,
    duration,
    startTime,
    endTime,
    guests,
    occasion,
    seating,
    specialRequest: specialRequest || "",
    tableId,
    status: "CONFIRMED",
    user: req.user?._id || null,
  });

  res.status(201).json({
    success: true,
    data: reservation,
  });
});

exports.getReservations = catchAsync(async (req, res) => {
  const filter = {};

  if (req.user) {
    filter.email = req.user.email;
  } else if (req.query.email) {
    filter.email = req.query.email.toLowerCase();
  } else {
    throw new AppError(
      "Please sign in or provide an email to view reservations",
      401
    );
  }

  const reservations = await Reservation.find(filter).sort({
    startTime: -1,
  });

  res.status(200).json({
    success: true,
    data: reservations,
  });
});

exports.getAllReservations = catchAsync(async (req, res) => {
  const reservations = await Reservation.find()
    .sort({ createdAt: -1 })
    .limit(100);

  res.status(200).json({
    success: true,
    data: reservations,
  });
});

exports.getReservation = catchAsync(async (req, res) => {
  const reservation = await Reservation.findOne({
    bookingId: req.params.bookingId,
  });

  if (!reservation) {
    throw new AppError("Reservation not found", 404);
  }

  res.status(200).json({
    success: true,
    data: reservation,
  });
});

// UPDATE / CANCEL RESERVATION
exports.updateReservation = catchAsync(async (req, res) => {
  const reservation = await Reservation.findOne({
    bookingId: req.params.bookingId,
  });

  if (!reservation) {
    throw new AppError("Reservation not found", 404);
  }

  if (req.user && reservation.email !== req.user.email) {
    throw new AppError(
      "You can only update your own reservations",
      403
    );
  }

  const updatedReservation = await Reservation.findOneAndUpdate(
    {
      bookingId: req.params.bookingId,
    },
    {
      $set: {
        status: req.body.status,
      },
    },
    {
      new: true,
      runValidators: false,
    }
  );

  res.status(200).json({
    success: true,
    data: updatedReservation,
  });
});