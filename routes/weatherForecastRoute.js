const express = require("express");
const weatherForecastController = require("./../controllers/weatherForecastController");
const router = express.Router();

router.route("/")
     .get(weatherForecastController.getFlorianopolis4Weather)
     .post(weatherForecastController.getWeatherForecast);

module.exports = router;