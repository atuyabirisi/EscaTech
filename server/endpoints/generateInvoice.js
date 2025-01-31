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
      service,
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
      service: service,
      client: client,
      invoiceItems: invoiceItems,
      vat: vat,
      total: total,
      grandTotal: grandTotal,
      outstandingBalance: grandTotal,
    });

    await newInvoice.save();
    res.status(201).send("Invoice has been generated");
  })
);

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    const { clientId } = req.query;

    if (clientId) {
      const clientInvoices = await GenerateInvoiceModel.find({
        client: clientId,
      })
        .populate("client")
        .sort({ createdAt: -1 });
      res.send(clientInvoices);
    } else {
      const allInvoices = await GenerateInvoiceModel.find({})
        .populate("client")
        .sort({ createdAt: -1 });
      res.send(allInvoices);
    }
  })
);

router.get(
  "/:id",
  asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    const invoice = await GenerateInvoiceModel.findById(id).populate("client");
    res.send(invoice);
  })
);

module.exports = router;
