const { Schema, model } = require("mongoose");

const TransactionModel = model(
  "transaction",
  new Schema(
    {
      invoice_id: { type: String, required: true },
      amount_due: { type: Number, required: true },
      payed_amount: { type: Number, required: true },
      payment_method: {
        type: String,
        required: true,
        enum: ["bank_transfer", "mobile_money"],
      },
      payment_date: { type: String, required: true },
      bank_name: { type: String },
      transaction_reference: { type: String, required: true, unique: true },
    },
    { timestamps: true }
  )
);

module.exports = TransactionModel;
