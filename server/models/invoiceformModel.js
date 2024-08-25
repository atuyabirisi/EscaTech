const { Schema, model } = require("mongoose");

const Invoice = model(
  "invoice",
  new Schema({
    status: {
      type: String,
      required: true,
    },
    opendate: {
      type: String,
      required: true,
    },
    duedate: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    unitprice: {
      type: String,
      required: true,
    },
    vat: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    createdAt: Date,
    expireAt: Date,
  })
);

module.exports = Invoice;
