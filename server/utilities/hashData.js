const { genSalt, hash } = require("bcrypt");

const hashData = async (data, saltRounds = 10) => {
  const salt = await genSalt(saltRounds);
  return hash(data, salt);
};

module.exports = hashData;
