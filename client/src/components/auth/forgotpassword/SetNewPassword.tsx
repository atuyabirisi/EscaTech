import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { setFormData } from "../../../slices/resetPassFormSlice";
import { FormEvent } from "react";
import { updateResource } from "../../../hooks/updatePassword";

export default function SetNewPassword() {
  const dispatch: AppDispatch = useDispatch();
  const { formData } = useSelector(
    (state: RootState) => state.resetPassMultiForm
  );

  const { performUpdate } = updateResource();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    performUpdate(formData);
  };

  return (
    <>
      <div className="py-2">
        <div className="py-2">
          <h5>Set New Password</h5>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                onChange={(e) =>
                  dispatch(setFormData({ password: e.target.value }))
                }
              />
            </div>
            {/* <div className="mb-4">
              <label htmlFor="confirmPass">Confirm Password</label>
              <input
                {...register("confirmPass")}
                type="password"
                id="confirmPass"
                className="form-control"
              />
            </div> */}
            <div className="d-grid">
              <button className="btn btn-danger" type="submit">
                Set Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
