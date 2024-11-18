const express = require("express"),
  cors = require("cors"),
  registerUser = require("../endpoints/registerUser"),
  requestOtp = require("../endpoints/requestOtp"),
  login = require("../endpoints/login"),
  verifyOtp = require("../endpoints/verifyOtp"),
  error = require("../middleware/error");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api/register", registerUser);
  app.use("/api/login", login);
  app.use("/api/request_otp", requestOtp);
  app.use("/api/verify_otp", verifyOtp);

  app.use(error);
};
