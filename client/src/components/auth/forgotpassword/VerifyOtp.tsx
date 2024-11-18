import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { setFormStepNumber } from "../../../slices/forgotPassSlice";
import { setFormData } from "../../../slices/resetPassFormSlice";
import { FormEvent } from "react";
import { useVerifyOtp } from "../../../hooks/useVerifyOtp";

export default function VerifyOtp() {
  const { formData } = useSelector(
    (state: RootState) => state.resetPassMultiForm
  );

  const dispatch: AppDispatch = useDispatch();
  const { verifyOtp } = useVerifyOtp();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    verifyOtp(formData);
    dispatch(setFormStepNumber(3));
  };

  return (
    <>
      <div className="py-2">
        <div className="py-2">
          <h5>Verify OTP</h5>
          <small>Enter the one time password sent to your email</small>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="otp">One Time Password</label>
              <input
                type="number"
                id="otp"
                className="form-control"
                onChange={(e) => dispatch(setFormData({ otp: e.target.value }))}
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-danger" type="submit">
                Verify otp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
