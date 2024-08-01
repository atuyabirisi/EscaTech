const express = require("express");
const router = express.Router();
const { StudentModel } = require("../models/studentModel");

router.post("/", async (req, res) => {
  const { name, sid, level, major, phone } = req.body;

  const student = await StudentModel.findOne({ sid: sid });
  if (student) return res.status(404).send("Student Already registered");

  const newStudent = new StudentModel({
    name: name,
    sid: sid,
    major: major,
    level: level,
    phone: phone,
  });

  await newStudent.save();
  res.status(200).send("Student Registered Successfully");
});

module.exports = router;
