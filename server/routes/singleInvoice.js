const express = require("express");
const router = express.Router();
const { GenerateInvoiceModel } = require("../models/generateInvoiceModel");
const asyncMiddleware = require("../middleware/asyncMiddleware");

router.get(
  "/:id",
  asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    if (id) {
      const invoice = await GenerateInvoiceModel.findOne({ _id: id }).populate(
        "client"
      );
      res.status(200).send(invoice);
    } else {
      const allInvoices = await GenerateInvoiceModel.find().populate("client");
      res.status(200).send(allInvoices);
    }
  })
);

module.exports = router;
