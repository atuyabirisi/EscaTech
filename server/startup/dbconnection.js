const mongoose = require("mongoose"),
  logger = require("../logger/winstonLogger"),
  dbConnectionString = process.env.DB_CONNECTION_STRING;

module.exports = () => {
  mongoose
    .connect(dbConnectionString)
    .then(() => logger.info("connected to mongodb"))
    .catch((err) => logger.error(err.message));
};
