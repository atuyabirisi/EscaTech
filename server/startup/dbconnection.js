const mongoose = require("mongoose");
const logger = require("../logger/winstonLogger");

module.exports = function () {
  const dbConnection = process.env.DB_CONNECTION;

  mongoose
    .connect(dbConnection)
    .then(() => logger.info("connected to mongoDB"))
    .catch((error) => logger.error(error.message));
};
