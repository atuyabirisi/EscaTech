const generateOtp = () => {
  const otp = Math.floor(Math.random() * 1000000)
    .toString()
    .slice(-5);
  return otp;
};

module.exports = generateOtp;
