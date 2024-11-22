const express = require("express");
const app = express();

require("dotenv").config();
require("./startup/dbconnection")();
require("./startup/routes")(app);

const portA = process.env.PORTA;
const portB = process.env.PORTB;
const port = portA || portB;

app.listen(port, () => console.log(`server running on port ${port}`));
