const express = require("express"),
  router = express.Router(),
  asyncMiddleware = require("../middleware/asyncMiddleware"),
  secret = process.env.SECRET_KEY,
  { sign } = require("jsonwebtoken"),
  User = require("../models/userModel"),
  { compare } = require("bcrypt");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user || typeof user !== "object")
      return res.status(400).send("Invalid email or password!");

    const isMatch = await compare(password, user.password);
    if (isMatch === false)
      return res.status(400).send("Invalid email or password");

    const token = sign({ email: email, isVerified: user.isVerified }, secret);
    res.send(token);
  })
);

module.exports = router;
