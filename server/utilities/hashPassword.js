const bcrypt = require("bcrypt");

async function hashPassword(data, saltRounds = 10) {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedData = bcrypt.hash(data, salt);
  return hashedData;
}

module.exports = hashPassword;
