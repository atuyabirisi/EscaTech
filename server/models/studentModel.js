const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sid: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

const StudentModel = model("student", studentSchema);

module.exports.StudentModel = StudentModel;
