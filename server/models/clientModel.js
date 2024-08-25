const { Schema, model } = require("mongoose");

const Client = model(
  "client",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  })
);

module.exports = Client;
