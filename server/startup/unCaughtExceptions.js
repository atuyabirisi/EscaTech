const logger = require("../logger/winstonLogger");

module.exports = () => {
  process.on("unhandledRejection", (exception) => {
    logger.error(exception.message);
  });

  process.on("uncaughtException", (exception) => {
    logger.error(exception.message);
  });
};
