const express = require("express"),
  router = express.Router(),
  User = require("../models/userModel"),
  asyncMiddleware = require("../middleware/asyncMiddleware"),
  hashData = require("../utilities/hashData");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { username, email, phone } = req.body;

    let user = await User.findOne({ email: email });
    if (user) return res.status(400).send("User already registered");

    user = new User({
      username: username,
      email: email,
      phone: phone,
    });

    user.password = await hashData(user.password);

    await user.save();
    res.status(201).send("User successfully registered!");
  })
);

router.put(
  "/",
  asyncMiddleware(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).send("Failed to change password!");

    const userRecord = await User.findOne({ email: email });

    if (!userRecord) return res.status(404).send("User not found");

    const hashedPassword = await hashData(password);
    userRecord.password = hashedPassword;

    await userRecord.save();
    res.status(200).send("password updated successfully");
  })
);

module.exports = router;
