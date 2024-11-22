const mongoose = require("mongoose");
const logger = require("../logger/winstonLogger");
const dbConnectionString = process.env.DB_CONNECTION_STRING;

module.exports = () => {
  mongoose
    .connect(dbConnectionString)
    .then(() => logger.info("connected to mongodb"))
    .catch((err) => logger.error(err.message));
};
