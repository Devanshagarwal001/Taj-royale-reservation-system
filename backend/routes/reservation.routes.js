// const express = require("express");
// const reservationController = require("../controllers/reservationController");
// const { protect, optionalAuth } = require("../middleware/auth");

// const router = express.Router();

// router.post("/", optionalAuth, reservationController.createReservation);
// router.get("/all", reservationController.getAllReservations);
// router.get("/", protect, reservationController.getReservations);
// router.get("/:bookingId", reservationController.getReservation);
// router.patch("/:bookingId", optionalAuth, reservationController.updateReservation);

// module.exports = router;
const express = require("express");
const reservationController = require("../controllers/reservationController");
const { protect, optionalAuth } = require("../middleware/auth");

const router = express.Router();

router.post("/", protect, reservationController.createReservation);
router.get("/all", reservationController.getAllReservations);
router.get("/", protect, reservationController.getReservations);
router.get("/:bookingId", reservationController.getReservation);
router.patch("/:bookingId", optionalAuth, reservationController.updateReservation);

module.exports = router;