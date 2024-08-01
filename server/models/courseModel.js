const { Schema, model } = require("mongoose");

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    dep: {
      type: String,
      required: true,
    },
    exam: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CourseModel = model("course", courseSchema);

module.exports.CourseModel = CourseModel;
