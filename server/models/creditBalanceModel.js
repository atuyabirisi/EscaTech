const { Schema, model } = require("mongoose");

const CreditBalanceModel = model(
  "creditBalance",
  new Schema(
    {
      credit_amount: { type: Number, required: true },
      overpaidInvoiceId: { type: String, required: true },
      transaction_reference: {
        type: String,
        required: true,
        unique: true,
      },
      client: { type: Schema.Types.ObjectId, ref: "client", required: true },
    },
    { timestamps: true }
  )
);

module.exports = CreditBalanceModel;
