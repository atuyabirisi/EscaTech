import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  calculateTotalBeforeTaxes,
  calculateGrandTotal,
} from "../../slices/invoiceform";
import { useEffect } from "react";

export default function Taxes() {
  const { vat, total, grandTotal } = useSelector(
    (store: RootState) => store.invoiceForm.formData
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalBeforeTaxes());
    dispatch(calculateGrandTotal());
  }, []);

  return (
    <form>
      <div className="card">
        <div className="card-header border-bottom-0 p-2">
          <h6>Add taxes</h6>
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
              className="form-control"
              value={total}
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
              className="form-control"
              value={vat}
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
              className="form-control"
              value={grandTotal}
              readOnly
            />
          </div>
        </div>
      </div>
    </form>
  );
}
