const winston = require("winston");

const customLevels = {
  levels: {
    error: 0,
    info: 2,
  },
  colors: {
    error: "red",
    info: "green",
  },
};

winston.addColors(customLevels.colors);

module.exports = winston.createLogger({
  levels: customLevels.levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm" }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [new winston.transports.File({ filename: "combined.log" })],
  exitOnError: false,
});
