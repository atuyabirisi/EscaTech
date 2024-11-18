const { Schema, model } = require("mongoose");

const Otp = model(
  "otp",
  new Schema({
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    createdAt: Date,
    expireAt: Date,
  })
);

module.exports = Otp;
