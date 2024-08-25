const express = require("express");
const router = express.Router();
const Client = require("../models/clientModel");
const asyncMiddleware = require("../middleware/asyncMiddleware");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { name, email, phone, address } = req.body;

    let client = await Client.findOne({ email: email });
    if (client) return res.status(400).send("Client is already registered");

    client = new Client({
      name: name,
      email: email,
      phone: phone,
      address: address,
    });

    await client.save();
    res.status(200).send("Client has been registered successfully");
  })
);

router.get(
  "/",
  asyncMiddleware(async (_req, res) => {
    const clients = await Client.find();
    res.status(200).send(clients);
  })
);

module.exports = router;
