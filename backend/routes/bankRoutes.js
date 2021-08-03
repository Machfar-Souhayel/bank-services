const express = require("express");
const router = express.Router();
const bankController = require("./../controllers/bankController");

// Bank routes
router.route("/").post(bankController.creditTitle);

module.exports = router;
