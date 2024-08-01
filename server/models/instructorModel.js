const { Schema, model } = require("mongoose");

const instructorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nid: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  account: {
    type: Number,
    required: true,
  },
  kra: {
    type: String,
    required: true,
  },
  dep: {
    type: String,
    required: true,
  },
});

const InstructorModel = model("Instructor", instructorSchema);

module.exports.InstructorModel = InstructorModel;
