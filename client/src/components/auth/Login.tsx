import { FormEvent, useState } from "react";
import { LoginCredentials, useLogin } from "../../hooks/useLogin";
import { useForm } from "react-hook-form";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { openForgotPassModal } from "../../slices/forgotPassSlice";

export default function Login() {
  const { login, error } = useLogin();

  const dispatch: AppDispatch = useDispatch();

  const [showPass, setShowPass] = useState(false);

  const { register, getValues, reset } = useForm<LoginCredentials>();

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    login(getValues());
    reset();
  };

  const openForgotPasswordModal = () => {
    dispatch(openForgotPassModal());
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="d-flex flex-column align-items-center mt-4">
        <div style={{ width: "95px", height: "95px" }}>
          <img
            src="src\assets\logo.webp"
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="text-center">
          <h5 className="fw-bolder">ESCATECH SERVICES K LTD</h5>
          <h5 className="fw-bold">Login</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center text-danger p-2 rounded">
        {error !== null && <h6>{error}</h6>}
      </div>
      <div className="row mt-4 px-1">
        <div style={{ maxWidth: "425px", margin: "auto" }}>
          <form onSubmit={handleFormSubmit}>
            <div className="my-3">
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
              <a
                href="#"
                className="link-dark fw-bold"
                onClick={openForgotPasswordModal}
              >
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
        <small className="fw-bold">powered by atuya</small>
      </div>
    </div>
  );
}
