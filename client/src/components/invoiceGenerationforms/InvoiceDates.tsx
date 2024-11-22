import { useForm } from "react-hook-form";
import { FormEvent } from "react";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { setStepNumber } from "../../slices/invoiceFormSteps";
import { setInvoiceFormData } from "../../slices/invoice/invoiceFormData";

export default function InvoiceDates() {
  const { register, getValues } = useForm(),
    dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setInvoiceFormData(getValues()));
    dispatch(setStepNumber(2));
  };

  return (
    <form className="p-2" onSubmit={handleSubmit}>
      <div className="card">
        <div className="card-header border-bottom-0 p-2">
          <h6>
            <b>Invoice Status & Dates</b>
          </h6>
        </div>
        <div className="card-body">
          <div className="mb-3 row">
            <div className="col-6">
              <label htmlFor="status" className="form-label">
                Invoice status:
              </label>
              <select
                {...register("status")}
                id="status"
                className="form-control"
              >
                <option value=""></option>
                <option value="closed">closed</option>
                <option value="open">open</option>
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
        <button className="btn btn-danger" type="submit">
          Add Invoice Dates
        </button>
      </div>
    </form>
  );
}
