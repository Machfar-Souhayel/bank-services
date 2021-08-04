const express = require("express");
const router = express.Router();
const bankController = require("./../controllers/bankController");

// Bank routes
router.route("/").get(bankController.creditTitle);

module.exports = router;
