const express = require("express"),
  router = express.Router(),
  asyncMiddleware = require("../middleware/asyncMiddleware"),
  sendEMail = require("../emailController/mailTransporter"),
  Otp = require("../models/otpModel"),
  hashData = require("../utilities/hashData"),
  generateOtp = require("../utilities/generateOtp"),
  user = process.env.USER;

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { email } = req.body;

    if (!email) throw new Error("Invalid email or otp");

    await Otp.deleteOne({ email: email });

    let otp = generateOtp();

    const mailOptions = {
      from: user,
      to: email,
      subject: `EscaTech Account - Reset Account Password Otp `,
      html: `
      <p>Dear user,<br/>Use the One Time Password below to verify your Businessly Account</p>
      <p style= "color:tomato; font-size:25px; letter-spacing: 2px;"> <b>OTP: ${otp}</b></p>
      <p>This code <b>expires in 1 hour(s)</b></p> <P>Regards,<br/>ICT Team.</P>`,
    };

    await sendEMail(mailOptions);

    otp = await hashData(otp);

    let otpRecord = new Otp({
      email: email,
      otp: otp,
      createdAt: Date.now(),
      expireAt: Date.now() + 900000,
    });

    await otpRecord.save();

    res.status(200).send(otp);
  })
);

module.exports = router;
