import { useForm } from "react-hook-form";

export default function DepartmentReg() {
  const instructors = ["Atuya", "Dan", "Edwin", "Gregory", "Gratus", "Jayvon"];
  const { register, handleSubmit } = useForm();

  return (
    <div className="row mx-1">
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
        <div className="d-flex justify-content-center py-3">
          <h5>Register Academic Department</h5>
        </div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="mb-3">
            <label htmlFor="depid" className="form-label">
              DEPARTMENT CODE
            </label>
            <input
              {...register("depid")}
              id="depid"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="depname" className="form-label">
              DEPARTMENT NAME
            </label>
            <input
              {...register("depname")}
              id="depname"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="hod" className="form-label">
              HOD
            </label>
            <select {...register("hod")} id="hod" className="form-control">
              <option value="" disabled>
                Select the Department Head
              </option>
              {instructors.map((instructor, index) => (
                <option value={instructor} key={index}>
                  {instructor}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              PHONE
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
              EMAIL
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
