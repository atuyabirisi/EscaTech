const { VerificationOtp } = require("../models/otpModel");
const generateOneTimePass = require("../utilities/generateOneTimePass");
const sendEMail = require("./mailTransporter");
const bcrypt = require("bcrypt");
const logger = require("../logger/winstonLogger");
const senderEmail = process.env.EMAIL_PASSWORD;

async function sendOtpMail({ email }) {
  try {
    if (!email) return res.status(400).send("Invalid email or otp");

    await VerificationOtp.deleteOne({ email: email });
    let otp = generateOneTimePass();
    const mailOptions = {
      from: senderEmail,
      to: email,
      subject: `EscaTech Ltd Account Verification`,
      html: `
      <p>Dear User,<br/>Use the One Time Password below to verify your ESKL Account</p>
      <p style= "color:tomato; font-size:25px; letter-spacing: 2px;"> <b>OTP: ${otp}</b></p>
      <p>This code <b>expires in 1 hour(s)</b></p> <P>Regards,<br/>ICT Team.</P>`,
    };

    await sendEMail(mailOptions);
    const salt = await bcrypt.genSalt(10);
    let hashedOtp = await bcrypt.hash(otp, salt);

    let otpRecord = new VerificationOtp({
      email: email,
      hashedOtp: hashedOtp,
      createdAt: Date.now(),
      expireAt: Date.now() + 900000,
    });

    await otpRecord.save();
  } catch (error) {
    logger.error(error);
    res.status(500).send("Internal server error");
  }
}

module.exports = sendOtpMail;
