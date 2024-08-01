import { useForm } from "react-hook-form";
import useDepartmentList from "../hooks/useDepartment";
import { FormEvent } from "react";
import axios from "axios";

export default function CoursesReg() {
  const { data } = useDepartmentList();
  const { register, getValues, reset } = useForm();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const course = getValues();

    axios
      .post("http://localhost:5000/api/courses", { ...course })
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
          <h5>Add New Course</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Course Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              Course Code
            </label>
            <input
              {...register("code")}
              id="code"
              type="string"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dep" className="form-label">
              Department
            </label>
            <select {...register("dep")} id="dep" className="form-control">
              <option value=""></option>
              {data?.map((dep, index) => (
                <option key={index} value={dep.code}>
                  {dep.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exam" className="form-label">
              Exam
            </label>
            <select {...register("exam")} id="exam" className="form-control">
              <option value="" disabled>
                Select Exam Body
              </option>
              <option value=""></option>
              <option value="CBET">CBET</option>
              <option value="KNEC">KNEC</option>
            </select>
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
