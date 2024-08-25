import axios from "axios";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const { register, getValues } = useForm();

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    const user = getValues();
    console.log(user);

    axios.post("http://localhost:5000/api/auth", { ...user }).then((res) => {
      const token = res.data;
      if (token) {
        localStorage.setItem("token", token);
      }
      window.location.href = "/dashboard";
    });
  };

  return (
    <div className="vh-100 m-1" style={{ overflowX: "hidden" }}>
      <div className="d-flex flex-column align-items-center">
        <div style={{ width: "95px", height: "95px" }}>
          <img
            src="src\assets\logo.webp"
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="text-center">
          <h5>ESCATECH SERVICES K LTD</h5>
          <h5>Login</h5>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-5 col-lg-4 mx-auto">
          <form onSubmit={handleLogin}>
            <div className="mb-3 mt-2">
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
              <a href="#" className="link-dark fw-bold">
                Forgot Password?
              </a>
            </div>
            <div className="d-grid">
              <button className="btn btn-danger" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="text-center">
        <small>
          <span className="fw-bold">powered by atuya</span>
        </small>
      </div>
    </div>
  );
}
