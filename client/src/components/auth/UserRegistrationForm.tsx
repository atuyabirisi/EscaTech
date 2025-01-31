import { useForm } from "react-hook-form";
import {
  RegistrationData,
  userRegSchema,
} from "./schemas/userRegistrationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { createResource } from "../../hooks/useCreateResource";

export default function UserRegistrationForm() {
  const [_visible, setVisible] = useState(true);
  const { postRequest, error } = createResource();

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, [error]);

  const {
    register,
    getValues,
    formState: { errors },
  } = useForm<RegistrationData>({ resolver: zodResolver(userRegSchema) });

  const handleSubmit = () => {
    postRequest("/register", getValues());
  };

  return (
    <div className="p-1 bg-light rounded">
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
          <button className="btn btn-danger" type="submit">
            <small>Register User</small>
          </button>
        </div>
      </form>
    </div>
  );
}
