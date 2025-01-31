const express = require("express"),
  router = express.Router(),
  Client = require("../models/clientModel"),
  asyncMiddleware = require("../middleware/asyncMiddleware");

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

router.get(
  "/:id",
  asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    const clientInfo = await Client.findById(id);
    res.send(clientInfo);
  })
);

router.put(
  "/:id",
  asyncMiddleware(async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;

    let client = await Client.findById(id);
    if (!client) return res.status(400).send("Client does not exist");

    client.name = name;
    client.email = email;
    client.phone = phone;
    client.address = address;

    const updatedClient = await client.save();

    res.send(updatedClient);
  })
);

module.exports = router;
