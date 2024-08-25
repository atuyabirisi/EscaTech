const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitprice: { type: Number, required: true },
  amount: { type: Number, required: true },
});

const invoiceSchema = new Schema(
  {
    status: { type: String, required: true, enum: ["open", "closed", "paid"] },
    opendate: { type: Date, required: true },
    duedate: { type: Date, required: true },
    client: {
      type: Schema.Types.ObjectId,
      ref: "client",
      required: true,
    },
    products: [productSchema],
    vat: { type: Number, required: true },
    total: { type: Number, required: true },
    grandTotal: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const GenerateInvoiceModel = model("Invoice", invoiceSchema);

module.exports = GenerateInvoiceModel;
