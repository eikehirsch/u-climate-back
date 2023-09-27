const fs = require("fs");

const usersFeedback = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/usersFeedback.json`)
);

exports.getUsersFeedback = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "success",
      data: usersFeedback,
    });
  } catch (error) {
    console.error(error);
  }
  next();
};
