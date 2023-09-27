const express = require("express");
const usersFeedbackController = require("./../controllers/usersFeedbackController");

const router = express.Router();

router.route("/")
     .get(usersFeedbackController.getUsersFeedback);

module.exports = router;
