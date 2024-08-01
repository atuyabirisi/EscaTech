import { useForm } from "react-hook-form";
import { FormEvent } from "react";
import axios from "axios";
import useCourseList from "../hooks/useCourses";

export default function StudentReg() {
  const { data } = useCourseList();
  const { register, getValues, reset } = useForm();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newStudent = getValues();

    axios
      .post("http://localhost:5000/api/student", { ...newStudent })
      .then((res) => {
        console.log(res.data);
        reset();
      })
      .catch((error) => {
        console.log(error);
        reset();
      });
  };
  return (
    <div className="row mx-1">
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
        <div className="d-flex justify-content-center py-3">
          <h5>Register New Student</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Student Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sid" className="form-label">
              Student ID
            </label>
            <input
              {...register("sid")}
              id="sid"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="major" className="form-label">
              Major/Program Enrolled
            </label>
            <select {...register("major")} id="major" className="form-control">
              <option value=""></option>
              {data?.map((course, index) => (
                <option key={index} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="level" className="form-label">
              Level
            </label>
            <select {...register("level")} id="level" className="form-control">
              <option value=""></option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone No
            </label>
            <input
              {...register("phone")}
              id="phone"
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
      <div className="col-lg-3"></div>
    </div>
  );
}
