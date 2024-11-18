import { useForm } from "react-hook-form";
import { useRegisterUser } from "../../hooks/useRegisterUser";
import {
  RegistrationData,
  userRegSchema,
} from "./schemas/userRegistrationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

export default function UserRegistrationForm() {
  const [visible, setVisible] = useState(true);
  const { registerUser, error } = useRegisterUser();

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, [error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>({ resolver: zodResolver(userRegSchema) });

  return (
    <div style={{ overflowX: "hidden" }} className="vh-100 p-1">
      {visible && (
        <div className="alert alert-success" role="alert">
          {error}
        </div>
      )}
      <form
        autoComplete="false"
        onSubmit={handleSubmit((data) => {
          registerUser(data);
        })}
      >
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
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
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
            {errors.username && (
              <p className="text-danger">{errors.username.message}</p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <label htmlFor="phone" className="form-label">
              <small>Phone Number</small>
            </label>
            <input
              {...register("phone")}
              type="number"
              id="phone"
              className="form-control"
            />
            {errors.phone && (
              <p className="text-danger">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className="col-lg-8 d-flex justify-content-end">
          <button className="btn btn-info" type="submit">
            <small>Register User</small>
          </button>
        </div>
      </form>
    </div>
  );
}
