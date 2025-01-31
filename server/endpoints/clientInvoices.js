const express = require("express");
const router = express.Router();
const GenerateInvoiceModel = require("../models/generateInvoiceModel");
const asyncMiddleware = require("../middleware/asyncMiddleware");

router.get(
  "/:client_id",
  asyncMiddleware(async (req, res) => {
    const { client_id } = req.params;
    const clientInvoices = await GenerateInvoiceModel.find({
      client: { $eq: client_id },
    });

    res.send(clientInvoices);
  })
);

module.exports = router;
