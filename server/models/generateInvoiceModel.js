const { Schema, model } = require("mongoose");

const invoiceItemsSchema = new Schema({
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  subtotal: { type: Number, required: true },
});

const GenerateInvoiceModel = model(
  "invoice",
  new Schema(
    {
      invoice_id: { type: String, required: true },
      status: { type: String, required: true, enum: ["open", "closed"] },
      opendate: { type: String, required: true },
      duedate: { type: String, required: true },
      service: {
        type: String,
        required: true,
        enum: ["installation", "maintainance", "supplies"],
      },
      client: {
        type: Schema.Types.ObjectId,
        ref: "client",
        required: true,
      },
      invoiceItems: [invoiceItemsSchema],
      vat: { type: Number, required: true },
      total: { type: Number, required: true },
      grandTotal: { type: Number, required: true },
      outstandingBalance: { type: Number, required: true },
      creditBalance: { type: Number, default: 0, required: true },
      pdfLink: { type: String, default: "#" },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = GenerateInvoiceModel;
