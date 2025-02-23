const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();
require("./startup/dbconnection")();
app.use("/invoicepdfs", express.static(path.join(__dirname, "invoicepdfs")));
require("./startup/routes")(app);

const portA = process.env.PORTA;
const portB = process.env.PORTB;
const port = portA || portB;

app.listen(port, () => console.log(`server running on port ${port}`));
