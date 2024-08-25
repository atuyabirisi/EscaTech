import axios from "axios";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function VerifyAccount() {
  const navigate = useNavigate();

  const { register, getValues, reset } = useForm();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const otpDetails = getValues();
    axios
      .post("http://localhost:5000/api/verify", { ...otpDetails })
      .then((res) => {
        reset();
        res.status === 200 && navigate("/signin");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
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
            <h5>Verify Your Account</h5>
            <h6 className="text-danger">
              Enter a 5-digit one-time-password set to your email
            </h6>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-lg-5 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mt-2 mb-3">
                <label htmlFor="vemail" className="form-label">
                  Email
                </label>
                <input
                  {...register("email")}
                  id="vemail"
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="otp" className="form-label">
                  OTP
                </label>
                <input
                  {...register("otp")}
                  id="otp"
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="d-grid">
                <button className="btn btn-danger" type="submit">
                  Verify Account{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <a className="link-dark font-weight-bold" href="#">
          Resend OTP
        </a>
      </div>
    </>
  );
}
