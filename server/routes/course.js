const express = require("express");
const router = express.Router();
const { CourseModel } = require("../models/courseModel");

router.post("/", async (req, res) => {
  try {
    const { name, code, dep, exam } = req.body;

    const registeredCourse = await CourseModel.findOne({ code: code });
    if (registeredCourse)
      return res.status(400).send("Course already registered");

    let course = new CourseModel({
      code: code,
      name: name,
      dep: dep,
      exam: exam,
    });

    await course.save();
    res.status(200).send("Course has been successfully created");
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const courses = await CourseModel.find();
    res.status(200).send(courses);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
