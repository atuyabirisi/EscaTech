const Otp = require("../models/otpModel"),
  logger = require("../logger/winstonLogger"),
  generateOtp = require("../utilities/generateOtp"),
  sendEMail = require("./mailTransporter"),
  hashData = require("../utilities/hashData"),
  { compare } = require("bcrypt");

async function sendOtpMail() {
  // if (!email) throw new Error("Invalid email or otp");

  // await Otp.deleteOne({ email: email });
  console.log("atuya");
  let otp = generateOtp();
  console.log(otp);
  // const mailOptions = {
  //   from: "logrlsystems@hotmail.com",
  //   to: email,
  //   subject: `EscaTech Account - Reset Account Password Otp `,
  //   html: `
  //     <p>Dear user,<br/>Use the One Time Password below to verify your Businessly Account</p>
  //     <p style= "color:tomato; font-size:25px; letter-spacing: 2px;"> <b>OTP: ${otp}</b></p>
  //     <p>This code <b>expires in 1 hour(s)</b></p> <P>Regards,<br/>ICT Team.</P>`,
  // };

  // await sendEMail(mailOptions);

  otp = await hashData(otp);

  let otpRecord = new Otp({
    email: email,
    otp: otp,
    createdAt: Date.now(),
    expireAt: Date.now() + 900000,
  });

  const savedRecord = await otpRecord.save();
  console.log(savedRecord);
}

const verifyOtp = async (email, otp) => {
  try {
    const otpRecord = await Otp.findOne({ email: email });
    if (!otpRecord) throw new Error("Invalid otp");

    const expireAt = otpRecord.expireAt;
    hasedOtp = otpRecord.otp;

    if (Date.now() > expireAt) {
      Otp.deleteOne({ email: email });
      throw new Error("Otp has exprired, request new otp");
    }

    const validOtp = compare(otp, hashedOtp);
    if (validOtp) console.log("Valid Otp");
  } catch (err) {
    logger.error(err.message);
  }
};

module.exports = sendOtpMail;
module.exports = verifyOtp;
