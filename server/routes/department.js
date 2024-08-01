const express = require("express");
const router = express.Router();
const { departmentModel } = require("../models/departmentModel");

router.post("/", async (req, res) => {
  try {
    const { code, name, hod, phone, email } = req.body;

    const registeredDep = await departmentModel.findOne({ code: code });
    if (registeredDep)
      return res.status(400).send("Department already registered");

    let department = new departmentModel({
      code: code,
      name: name,
      hod: hod,
      phone: phone,
      email: email,
    });

    await department.save();
    res.status(200).send("Department has been successfully created");
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const departments = await departmentModel.find();
    res.status(200).send(departments);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
