import { useForm } from "react-hook-form";
import axios from "axios";
import { FormEvent } from "react";
import useInstructorsList from "../hooks/useInstructorList";

export default function DepartmentReg() {
  const { register, getValues, reset } = useForm();
  const { data } = useInstructorsList();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const department = getValues();

    axios
      .post("http://localhost:5000/api/department", { ...department })
      .then(() => {
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
          <h5>Register Academic Department</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              Departmet Code
            </label>
            <input
              {...register("code")}
              id="code"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Department Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="hod" className="form-label">
              Head of Department
            </label>
            <select {...register("hod")} id="hod" className="form-control">
              <option value=""></option>
              {data?.map((instructor, index) => (
                <option value={instructor.name} key={index}>
                  {instructor.name} {" - "}
                  {instructor.dep}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              {...register("phone")}
              id="phone"
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="text"
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
