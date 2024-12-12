const { Schema, model } = require("mongoose");

const invoiceItemsSchema = new Schema({
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  amount: { type: Number, required: true },
});

const GenerateInvoiceModel = model(
  "invoice",
  new Schema(
    {
      invoice_id: { type: String, required: true },
      status: { type: String, required: true, enum: ["open", "closed"] },
      service: {
        type: String,
        required: true,
        enum: ["installation", "maintainance", "supplies"],
      },
      opendate: { type: Date, required: true },
      duedate: { type: Date, required: true },
      client: {
        type: Schema.Types.ObjectId,
        ref: "client",
        required: true,
      },
      invoiceItems: [invoiceItemsSchema],
      vat: { type: Number, required: true },
      total: { type: Number, required: true },
      grandTotal: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = GenerateInvoiceModel;
