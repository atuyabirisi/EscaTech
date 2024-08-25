import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    getValues,
    reset,
    formState: { isValid },
  } = useForm();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const user = getValues();
    axios
      .post("http://localhost:5000/api/reg", { ...user })
      .then((res) => {
        reset();
        alert(res.data);
        navigate("/verify-account");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <form autoComplete="false" onSubmit={handleSubmit}>
        <div className="row my-2">
          <div className="col-lg-4">
            <label htmlFor="email" className="form-label">
              <small>Email</small>
            </label>
            <input
              {...register("email")}
              type="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="col-lg-4">
            <label htmlFor="username" className="form-label">
              <small>Username</small>
            </label>
            <input
              {...register("username")}
              type="text"
              className="form-control"
              id="username"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <label htmlFor="password" className="form-label">
              <small>Password</small>
            </label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
            />
          </div>
          <div className="col-lg-4">
            <label htmlFor="confirmPassword" className="form-label">
              <small>Confirm Password</small>
            </label>
            <input
              {...register("confirmPassword")}
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="confirmPassword"
            />
          </div>
        </div>
        <input
          type="checkbox"
          className="form-check-input"
          id="check"
          onChange={() => setShowPassword(!showPassword)}
        />
        <div className="col-lg-8 d-flex justify-content-end">
          <button disabled={!isValid} className="btn btn-info" type="submit">
            <small>Register User</small>
          </button>
        </div>
      </form>
    </div>
  );
}
