const express = require("express");
const router = express.Router();
const GenerateInvoiceModel = require("../models/generateInvoiceModel");
const asyncMiddleware = require("../middleware/asyncMiddleware");
const generateInvoiceId = require("../utilities/generateInvoiceId");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const {
      status,
      opendate,
      duedate,
      client,
      invoiceItems,
      vat,
      total,
      grandTotal,
    } = req.body;

    const invoice_id = await generateInvoiceId();

    const newInvoice = new GenerateInvoiceModel({
      invoice_id: invoice_id,
      status: status,
      opendate: opendate,
      duedate: duedate,
      client: client,
      invoiceItems: invoiceItems,
      vat: vat,
      total: total,
      grandTotal: grandTotal,
    });

    await newInvoice.save();
    res.status(201).send("Invoice has been generated");
  })
);

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    const allInvoices = await GenerateInvoiceModel.find({})
      .populate("client")
      .sort({ createdAt: -1 });
    res.status(200).send(allInvoices);
  })
);

router.get(
  "/:id",
  asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    const invoice = await GenerateInvoiceModel.findById(id).populate("client");
    console.log(invoice);
    res.send(invoice);
  })
);

module.exports = router;
