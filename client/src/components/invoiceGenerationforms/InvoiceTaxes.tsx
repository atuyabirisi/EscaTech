import { FormEvent, useEffect } from "react";
import { FcDownLeft, FcDownRight } from "react-icons/fc";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { goBack } from "../../slices/invoiceFormSteps";
import {
  calculateGrandTotal,
  calculateTotalBeforeTaxes,
} from "../../slices/invoice/invoiceFormData";
import { createResource } from "../../hooks/useCreateResource";

export default function InvoiceTaxes() {
  const dispatch: AppDispatch = useDispatch();

  const { formData } = useSelector((store: RootState) => store.invoiceFormData);

  const goOneStepBack = () => dispatch(goBack());

  useEffect(() => {
    dispatch(calculateTotalBeforeTaxes());
    dispatch(calculateGrandTotal());
  }, []);

  const { postRequest } = createResource();

  const generateInvoice = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
    postRequest("/invoice", formData);
  };

  return (
    <form onSubmit={generateInvoice}>
      <div className="card">
        <div className="card-header border-bottom-0 p-2">
          <h6>
            <b>Calculate Taxes</b>
          </h6>
        </div>
        <div className="card-body mb-3">
          <div className="col-md-6 mb-3">
            <label htmlFor="total">
              <h6>Total Before Taxes</h6>
            </label>
            <input
              name="total"
              id="total"
              type="number"
              value={formData.total}
              className="form-control"
              readOnly
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="vat">
              <h6>Value Added Tax -V.A.T</h6>{" "}
            </label>
            <input
              name="vat"
              id="vat"
              type="number"
              value={formData.vat}
              className="form-control"
              readOnly
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="grandtotal">
              <h6>Grand Total</h6>
            </label>
            <input
              name="grandtotal"
              id="grandtotal"
              type="number"
              value={formData.grandTotal}
              className="form-control"
              readOnly
            />
          </div>
        </div>
        <div className="card-footer mt-2 d-flex justify-content-end gap-3">
          <button className="btn btn-danger" onClick={goOneStepBack}>
            <span className="px-2">
              <FcDownLeft />
            </span>
            Go Back
          </button>
          <button className="btn btn-danger" type="submit">
            Generate Invoice
            <span className="px-2">
              <FcDownRight />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
