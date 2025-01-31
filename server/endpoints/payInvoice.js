const express = require("express");
const router = express.Router();
const asyncMiddleware = require("../middleware/asyncMiddleware");
const PayInvoiceModel = require("../models/transactionModel");
const GenerateInvoiceModel = require("../models/generateInvoiceModel");
const CreditBalanceModel = require("../models/creditBalanceModel");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const {
      invoice_id,
      amount_due,
      payed_amount,
      payment_method,
      payment_date,
      bank,
      transaction_reference,
    } = req.body;

    const transaction = new PayInvoiceModel({
      invoice_id: invoice_id,
      amount_due: amount_due,
      payed_amount: payed_amount,
      payment_method: payment_method,
      payment_date: payment_date,
      bank_name: bank,
      transaction_reference: transaction_reference,
    });

    await transaction.save();

    const invoiceRecord = await GenerateInvoiceModel.findOne({
      invoice_id: invoice_id,
    }).populate("client");

    if (!invoiceRecord) throw new Error("Invoice not found!!");

    const balance = payed_amount - invoiceRecord.outstandingBalance;

    if (balance === 0) {
      invoiceRecord.status = "closed";
      invoiceRecord.outstandingBalance = balance;
    }

    if (balance < 0) {
      invoiceRecord.outstandingBalance = -balance;
    }

    let creditBalance;

    if (balance > 0) {
      invoiceRecord.status = "closed";

      invoiceRecord.outstandingBalance = 0;

      invoiceRecord.creditBalance = balance;

      creditBalance = new CreditBalanceModel({
        credit_amount: balance,
        overpaidInvoiceId: invoice_id,
        transaction_reference: transaction_reference,
        client: invoiceRecord.client._id,
      });
    }

    await creditBalance.save();

    await invoiceRecord.save();
  })
);

module.exports = router;
