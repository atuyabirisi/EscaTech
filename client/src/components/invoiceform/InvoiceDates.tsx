import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setFormData } from "../../slices/invoiceform";
import { FormEvent } from "react";

export default function InvoiceDates() {
  const dispatch: AppDispatch = useDispatch();
  const { register, getValues } = useForm();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setFormData(getValues()));
  };

  return (
    <form className="p-2" onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header border-bottom-0 p-2">
          <h6>Invoice Status & Dates</h6>
        </div>
        <div className="card-body">
          <div className="mb-3 row">
            <div className="col-6">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                {...register("status")}
                id="status"
                className="form-control"
              >
                <option value="" disabled></option>
                <option value="open">open</option>
                <option value="paid">Paid</option>
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="mb-3 col-lg-6">
              <label htmlFor="opendate">Invoice Date:</label>
              <input
                {...register("opendate")}
                type="date"
                id="opendate"
                className="form-control"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="duedate">Due Date:</label>
              <input
                {...register("duedate")}
                type="date"
                id="duedate"
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-2 d-flex justify-content-end">
        <button className="btn btn-secondary" type="submit">
          Update Dates
        </button>
      </div>
    </form>
  );
}
