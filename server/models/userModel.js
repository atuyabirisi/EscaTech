const { Schema, model } = require("mongoose");

const User = model(
  "sytemUser",
  new Schema(
    {
      email: {
        type: String,
        unique: true,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
      password: {
        type: String,
        required: true,
        default: "123456",
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = User;
