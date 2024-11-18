const express = require("express"),
  app = express();

require("dotenv").config();
require("./startup/dbconnection")();
require("./startup/routes")(app);

const portA = process.env.PORTA,
  portB = process.env.PORTB,
  port = portA || portB;

app.listen(port, () => console.log(`server running on port ${port}`));
