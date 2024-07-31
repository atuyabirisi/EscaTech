import { useState } from "react";

export default function DepartmentReg() {
  const instructors = ["Atuya", "Dan", "Edwin", "Gregory", "Gratus", "Jayvon"];

  const [newDep, setNewDep] = useState({
    code: "",
    name: "",
    hod: "",
    email: "",
  });

  return (
    <div className="row mx-1">
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
        <div className="d-flex justify-content-center py-3">
          <h5>Register Academic Department</h5>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(newDep);
          }}
        >
          <div className="mb-3">
            <label htmlFor="depid" className="form-label">
              DEPARTMENT CODE
            </label>
            <input
              id="depid"
              type="text"
              className="form-control"
              onChange={(event) =>
                setNewDep({ ...newDep, code: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="depname" className="form-label">
              DEPARTMENT NAME
            </label>
            <input
              id="depname"
              type="text"
              className="form-control"
              onChange={(event) =>
                setNewDep({ ...newDep, name: event.target.value })
              }
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="hod" className="form-label">
              HOD
            </label>
            <select
              id="hod"
              className="form-control"
              onChange={(event) =>
                setNewDep({ ...newDep, hod: event.target.value })
              }
            >
              <option value="" disabled>
                Select the Department Head
              </option>
              {instructors.map((instructor) => (
                <option value={instructor}>{instructor}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              PHONE
            </label>
            <input id="phone" type="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              EMAIL
            </label>
            <input
              id="email"
              type="text"
              className="form-control"
              onChange={(event) =>
                setNewDep({ ...newDep, email: event.target.value })
              }
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
