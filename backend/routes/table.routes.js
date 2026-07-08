const express = require("express");
const tableController = require("../controllers/tableController");

const router = express.Router();

router.get("/", tableController.getTables);
router.get("/stats", tableController.getTableStats);

module.exports = router;
