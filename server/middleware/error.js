const logger = require("../logger/winstonLogger");

module.exports = function (err, _req, res) {
  logger.error(err.message);
  res.status(500).send("Something failed!");
};
