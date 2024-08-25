const express = require("express");
const router = express.Router();
const { sign } = require("jsonwebtoken");
const { User, validateUser } = require("../models/userModel");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const asyncMiddleware = require("../middleware/asyncMiddleware");
const secret = process.env.SECRET_KEY;

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send("Incomplete request");

    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).send("Invalid email or password");

    if (!user.isVerified)
      return res.status(400).send("Your account is not verified");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).send("Invalid email or password");

    const token = sign({ email: email }, secret);
    res.send(token);
  })
);

router.get(
  "/",
  auth,
  asyncMiddleware(async (req, res) => {
    const { email } = req.activeUser;
    const activeUser = await User.findOne({ email: email }).select([
      "id",
      "username",
      "email",
    ]);
    res.send(activeUser);
  })
);

module.exports = router;
