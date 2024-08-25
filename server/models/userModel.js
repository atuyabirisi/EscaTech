const { Schema, model } = require("mongoose");
const Joi = require("joi");

const User = model(
  "User",
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
      password: {
        type: String,
        required: true,
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  )
);

function validateUser(user) {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(1024),
  });
  return schema.validate({
    email: user.email,
    password: user.password,
  });
}

module.exports.validateUser = validateUser;
module.exports.User = User;
