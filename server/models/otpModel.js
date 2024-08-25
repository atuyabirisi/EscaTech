const { Schema, model } = require("mongoose");

const VerificationOtp = model(
  "verificationotp",
  new Schema({
    email: {
      type: String,
      required: true,
    },
    hashedOtp: {
      type: String,
      required: true,
    },
    createdAt: Date,
    expireAt: Date,
  })
);

function validateCode(otpObject) {
  const schema = Joi.object({
    email: Joi.string().email(),
    otp: Joi.string().required(),
  });
  return schema.validateCode({
    email: otpObject.email,
    otp: otpObject.otp,
  });
}

module.exports.VerificationOtp = VerificationOtp;
module.exports.validateCode = validateCode;
