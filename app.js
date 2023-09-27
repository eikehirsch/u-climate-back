const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

// Routes
const usersFeedbackRouter = require('./routes/usersFeedbackRoute');
const weatherForecastRouter = require('./routes/weatherForecastRoute');

const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/usersFeedback", usersFeedbackRouter);
app.use("/api/v1/weather-forecast", weatherForecastRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`Este é o back-end do uClimate na porta ${port}`);
});
