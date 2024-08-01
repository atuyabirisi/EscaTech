import { useForm } from "react-hook-form";
import useDepartmentList from "../hooks/useDepartment";
import { FormEvent } from "react";
import axios from "axios";

export default function InstructorReg() {
  const { data } = useDepartmentList();
  const { register, getValues, reset } = useForm();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const instructor = getValues();

    axios
      .post("http://localhost:5000/api/instructor", { ...instructor })
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
      <div className="d-flex justify-content-center py-3">
        <h5>Register New Instructor</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nid" className="form-label">
              National ID
            </label>
            <input
              {...register("nid")}
              id="nid"
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              {...register("gender")}
              id="gender"
              className="form-control"
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
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
        </div>
        <div className="col-lg-6">
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
          <div className="mb-3">
            <label htmlFor="account" className="form-label">
              Bank Account No
            </label>
            <input
              {...register("account")}
              id="account"
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="kra" className="form-label">
              KRA Pin
            </label>
            <input
              {...register("kra")}
              id="kra"
              type="text"
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
          <div className="mb-3 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
