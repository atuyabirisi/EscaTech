import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { setStepNumber } from "../../slices/invoiceFormSteps";
import { setInvoiceFormData } from "../../slices/invoice/invoiceFormData";
import {
  InvoiceDateSchema,
  InvoiceDate,
} from "../../schemas/invoiceFormSchemas/invoiceDatesSchema";

export default function InvoiceDates() {
  const dispatch: AppDispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceDate>({
    resolver: zodResolver(InvoiceDateSchema),
  });

  const onSubmit = (data: FieldValues) => {
    data.opendate = data.opendate.toString();
    data.duedate = data.duedate.toString();
    dispatch(setInvoiceFormData(data));
    dispatch(setStepNumber(2));
  };

  return (
    <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
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
                <option value="closed">Closed</option>
                <option value="open">open</option>
              </select>
              {errors.status && (
                <p className="text-danger">{errors.status.message}</p>
              )}
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
              {errors.opendate && (
                <p className="text-danger">{errors.opendate.message}</p>
              )}
            </div>
            <div className="col-lg-6">
              <label htmlFor="duedate">Due Date:</label>
              <input
                {...register("duedate")}
                type="date"
                id="duedate"
                className="form-control"
              />
              {errors.duedate && (
                <p className="text-danger">{errors.duedate.message}</p>
              )}
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
