const express = require("express");
const cors = require("cors");
const register = require("../routes/registerSystemUser");
const verifyAcc = require("../routes/verifyotp");
const auth = require("../routes/signin");
const invoice = require("../routes/invoice");
const client = require("../routes/client");
const singleInvoice = require("../routes/singleInvoice");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use("/api/reg", register);
  app.use("/api/verify", verifyAcc);
  app.use("/api/auth", auth);
  app.use("/api/invoice", invoice);
  app.use("/api/client-registration", client);
  app.use("/api/singleInvoice", singleInvoice);
  app.use(error);
};
