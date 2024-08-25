const express = require("express");
const app = express();
const process = require("node:process");

require("dotenv").config();
require("./startup/unCaughtExceptions")();
require("./startup/dbconnection")();
require("./startup/routes")(app);

process.on("uncaughtException", (exception) => {
  console.log("We caught an Exception");
  logger.error(exception.message);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
