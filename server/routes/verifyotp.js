const express = require("express");
const router = express.Router();
const { VerificationOtp } = require("../models/otpModel");
const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const asyncMiddleware = require("../middleware/asyncMiddleware");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { email, otp } = req.body;

    const otpRecord = await VerificationOtp.findOne({ email: email });
    if (!otpRecord) return res.status(400).send("Invalid Otp");

    const { expireAt, hashedOtp } = otpRecord;

    if (Date.now() > expireAt) {
      VerificationOtp.deleteOne({ email: email });
      return res.status(400).send("Otp has expired, request a new Otp!");
    }

    const otpValid = await bcrypt.compare(otp, hashedOtp);
    if (otpValid === true) {
      await User.updateOne({ email }, { isVerified: true });
      await VerificationOtp.deleteOne({ email: email });
    } else {
      return res.status(400).send("Invalid Otp");
    }

    res.send("User verified successfully");
  })
);

module.exports = router;
