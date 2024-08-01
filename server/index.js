const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const department = require("./routes/department");
const instructor = require("./routes/instructor");
const course = require("./routes/course");

mongoose
  .connect("mongodb://0.0.0.0:27017/rtvc")
  .then(() => console.log("connected to mongodb"))
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());
app.use("/api/department", department);
app.use("/api/instructor", instructor);
app.use("/api/courses", course);

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
