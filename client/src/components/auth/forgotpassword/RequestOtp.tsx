import { useForm } from "react-hook-form";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { setFormStepNumber } from "../../../slices/forgotPassSlice";
import { setFormData } from "../../../slices/resetPassFormSlice";
import { FormEvent } from "react";
import { RequestBody, requestOtp } from "../../../hooks/useOtp";

export default function RequestOtp() {
  const { register, getValues } = useForm<RequestBody>();
  const dispatch: AppDispatch = useDispatch();

  const { getOtp } = requestOtp();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getOtp(getValues());
    dispatch(setFormData(getValues()));
    dispatch(setFormStepNumber(2));
  };

  return (
    <>
      <div className="py-2">
        <div className="py-2">
          <h5>Reset Account Password</h5>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">Enter Account Email</label>
              <input
                {...register("email")}
                type="text"
                id="email"
                className="form-control"
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-danger" type="submit">
                Request otp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
