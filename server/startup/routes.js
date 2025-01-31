const express = require("express"),
  cors = require("cors"),
  registerUser = require("../endpoints/registerUser"),
  requestOtp = require("../endpoints/requestOtp"),
  login = require("../endpoints/login"),
  verifyOtp = require("../endpoints/verifyOtp"),
  error = require("../middleware/error"),
  client = require("../endpoints/client"),
  invoice = require("../endpoints/generateInvoice"),
  clientInvoicesRecord = require("../endpoints/clientInvoices"),
  payInvoice = require("../endpoints/payInvoice"),
  htmlToPdf = require("../endpoints/htmlToPdf"),
  path = require("path");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api/register", registerUser);
  app.use("/api/login", login);
  app.use("/api/request_otp", requestOtp);
  app.use("/api/verify_otp", verifyOtp);
  app.use("/api/register_client", client);
  app.use("/api/invoice", invoice);
  app.use("/api/client", clientInvoicesRecord);
  app.use("/api/pay_invoice", payInvoice);
  app.use("/api/generate_invoice_pdf", htmlToPdf);

  app.use("/uploads", express.static(path.join(__dirname, "uploads")));

  app.use(error);
};
