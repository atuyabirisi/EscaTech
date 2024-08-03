import { useState } from "react";
import { useForm } from "react-hook-form";

export default function StudentLogin() {
  const [showPass, setShowPass] = useState(false);
  const { register } = useForm();

  return (
    <div className="vh-100">
      <div className="w-50 mx-auto vh-100 d-flex flex-column align-items-center justify-content-center">
        <div style={{ width: "75px", height: "75px" }}>
          <img
            src="src\assets\logo.jpg"
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="w-100 text-center py-3">
          <h4>Welcome Back</h4>
          <h4>Login</h4>
        </div>
        <div className="w-75 p-4">
          <form>
            <div className="mb-3">
              <label htmlFor="sid" className="form-label">
                StudentID
              </label>
              <input
                {...register("sid")}
                id="sid"
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-1">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                {...register("password")}
                id="password"
                type={showPass ? "text" : "password"}
                className="form-control"
              />
            </div>
            <div className="d-flex justify-content-between mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={() => setShowPass(!showPass)}
              />
              <a href="#" className="link-primary font-weight-bold ">
                Forgot Password?
              </a>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
