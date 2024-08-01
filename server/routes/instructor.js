const express = require("express");
const { InstructorModel } = require("../models/instructorModel");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, nid, kra, gender, phone, email, account, dep } = req.body;

  const instructor = await InstructorModel.findOne({ nid: nid });
  if (instructor) return res.status(404).send("Instructor Already registered");

  const newInstructor = new InstructorModel({
    name: name,
    nid: nid,
    kra: kra,
    gender: gender,
    phone: phone,
    email: email,
    account: account,
    dep: dep,
  });

  await newInstructor.save();
  res.status(200).send("Instructor Registered Successfully");
});

router.get("/", async (req, res) => {
  try {
    const instructorList = await InstructorModel.find();
    res.status(200).send(instructorList);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
