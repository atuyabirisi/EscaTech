const { createTransport } = require("nodemailer");
const logger = require("../logger/winstonLogger");
const host = process.env.EMAIL_HOST;
const user = process.env.EMAIL_USER;
const email = process.env.EMAIL_PASSWORD;

const transporter = createTransport({
  host: host,
  auth: {
    user: user,
    pass: email,
  },
});

transporter.verify((error, success) => {
  if (error) logger.error(error);
  logger.info(success);
});

async function sendEMail(mailOptions) {
  try {
    await transporter.sendMail(mailOptions);
    return;
  } catch (error) {
    logger.error(error);
  }
}

module.exports = sendEMail;
