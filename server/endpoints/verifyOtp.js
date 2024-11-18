const express = require("express"),
  router = express.Router(),
  asyncMiddleware = require("../middleware/asyncMiddleware"),
  { compare } = require("bcrypt"),
  Otp = require("../models/otpModel");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) throw new Error("Invalid email or otp");

    const otpRecord = await Otp.findOne({ email: email });
    if (!otpRecord) throw new Error("Invalid otp");

    const expireAt = otpRecord.expireAt;
    hashedOtp = otpRecord.otp;

    if (Date.now() > expireAt) {
      Otp.deleteOne({ email: email });
      throw new Error("Otp has exprired, request new otp");
    }

    const validOtp = compare(otp, hashedOtp);
    if (validOtp) res.status(200).send("valid otp");
  })
);

module.exports = router;
