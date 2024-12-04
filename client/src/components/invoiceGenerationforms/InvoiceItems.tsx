import { ChangeEvent, FormEvent } from "react";
import { FcAdvance, FcDownLeft } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { goBack } from "../../slices/invoiceFormSteps";
import { AppDispatch, RootState } from "../../store";
import {
  setInvoiceItemsData,
  resetInvoiceItemsForm,
} from "../../slices/invoice/invoiceItemsSlice";
import { setStepNumber } from "../../slices/invoiceFormSteps";
import { setInvoiceProdutsData } from "../../slices/invoice/invoiceFormData";

export default function InvoiceItems() {
  const dispatch: AppDispatch = useDispatch();

  const goOneStepBack = () => dispatch(goBack());

  const advance = () => dispatch(setStepNumber(4));

  const { invoiceItemData } = useSelector(
    (state: RootState) => state.invoiceItemsData
  );

  const handleInputFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setInvoiceItemsData({ [e.currentTarget.name]: e.target.value }));
  };

  const addItemToInvoice = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setInvoiceProdutsData(invoiceItemData));
    dispatch(resetInvoiceItemsForm());
  };

  return (
    <form onSubmit={addItemToInvoice}>
      <div className="card border-0 mb-3">
        <div className="card-header border-bottom-0 p-2">
          <h6>
            <b>Add Product/Service to Invoice</b>
          </h6>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="description">Description</label>
            <textarea
              rows={2}
              className="w-100 form-control"
              placeholder="Brief Description"
              id="description"
              name="description"
              value={invoiceItemData.description}
              onChange={handleInputFieldChange}
            ></textarea>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="quantity">Quantity</label>
              <input
                name="quantity"
                id="quantity"
                type="number"
                className="form-control"
                value={invoiceItemData.quantity}
                onChange={handleInputFieldChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="unitPrice">Unit Price</label>
              <input
                name="unitPrice"
                id="unitPrice"
                type="number"
                className="form-control"
                value={invoiceItemData.unitPrice}
                onChange={handleInputFieldChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="subtotal">Subtotal</label>
              <input
                name="subtotal"
                id="subtotal"
                type="number"
                className="form-control"
                value={invoiceItemData.amount}
                onChange={handleInputFieldChange}
              />
            </div>
            <div className="col-md-6 d-flex py-3 justify-content-end align-items-end">
              <label htmlFor="#"></label>
              <button className="btn btn-info" type="submit">
                Add product/service to Invoice
              </button>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-end gap-3">
          <button className="btn btn-danger" onClick={goOneStepBack}>
            <span className="px-2">
              <FcDownLeft />
            </span>
            Go Back
          </button>
          <button className="btn btn-danger" onClick={advance}>
            Next
            <span className="px-2">
              <FcAdvance />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
