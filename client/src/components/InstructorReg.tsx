import { useForm } from "react-hook-form";

export default function InstructorReg() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="row mx-1">
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
        <div className="d-flex justify-content-center py-3">
          <h5>Register New Instructor</h5>
        </div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input
              {...register("fname")}
              id="fname"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              {...register("lname")}
              id="lname"
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
            <label htmlFor="a/c" className="form-label">
              Bank Account No
            </label>
            <input
              {...register("a/c")}
              id="a/c"
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
              <option value="Information Systems & Computing">
                Information Systems & Computing
              </option>
              <option value="Building & Civil Engineering">
                Building & Civil Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Liberal Studies">Liberal Studies</option>
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
