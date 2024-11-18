const { createTransport } = require("nodemailer"),
  logger = require("../logger/winstonLogger"),
  host = process.env.HOST,
  user = process.env.USER,
  pass = process.env.PASS;

const transporter = createTransport({
  host: host,
  auth: {
    user: user,
    pass: pass,
  },
});

transporter.verify((error, success) => {
  if (error) logger.info(error.message);
  logger.info(success);
});

const sendEmail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    return;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = sendEmail;
