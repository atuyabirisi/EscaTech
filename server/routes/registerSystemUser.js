const express = require("express");
const router = express.Router();
const { validateUser, User } = require("../models/userModel");
const hashPassword = require("../utilities/hashPassword");
const sendOtpMail = require("../mailcontroller/otpController");
const asyncMiddleware = require("../middleware/asyncMiddleware");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send("Incompelete request");

    const { username, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) return res.status(400).send("User already registered");

    user = new User({
      username: username,
      email: email,
      password: password,
    });

    await sendOtpMail({ email });

    user.password = await hashPassword(user.password);
    await user.save();
    res.status(200).send("User successfully registered!");
  })
);

module.exports = router;
