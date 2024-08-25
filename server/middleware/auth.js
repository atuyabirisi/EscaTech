const { verify } = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

function auth(req, res, next) {
  try {
    const token = req.header("x-auth-token");
    if (token === null) return res.status(401).send("Unauthorized");

    const decoded = verify(token, secret);
    req.activeUser = decoded;

    next();
  } catch (ex) {
    console.log("error", ex);
    res.status(400).send("Authentication failed!");
  }
}

module.exports = auth;
