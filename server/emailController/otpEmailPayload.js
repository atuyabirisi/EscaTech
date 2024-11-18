const senderEmail = process.env.SENDER_EMAIL;

const otpEmailPayLoad = {
  from: senderEmail,
  to: email,
  subject: `EscaTech Account - Reset Account Password Otp `,
  html: `
    <p>Dear user,<br/>Use the One Time Password below to verify your Businessly Account</p>
    <p style= "color:tomato; font-size:25px; letter-spacing: 2px;"> <b>OTP: ${otp}</b></p>
    <p>This code <b>expires in 1 hour(s)</b></p> <P>Regards,<br/>ICT Team.</P>`,
};

module.exports = otpEmailPayLoad;
