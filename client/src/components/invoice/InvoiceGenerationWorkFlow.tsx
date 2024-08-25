import { useState } from "react";
import InvoiceClientDetails from "../invoiceform/InvoiceClientDetails";
import InvoiceDates from "../invoiceform/InvoiceDates";
import ProductDetails from "../invoiceform/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import apiClient from "../../utilities/apiClient";
import { resetForm } from "../../slices/invoiceform";
import Taxes from "../invoiceform/Taxes";

export default function InvoiceGenerationWorkFlow() {
  const [formStep, setFormStep] = useState(1);

  const { formData } = useSelector((store: RootState) => store.invoiceForm);
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = () => {
    apiClient
      .post("/invoice", { ...formData })
      .then((res) => {
        console.log(res.data);
        dispatch(resetForm());
      })
      .catch((error) => console.log(error.data));
  };

  const nextStep = () => {
    if (formStep >= 4) return;
    setFormStep(formStep + 1);
  };

  const prevStep = () => {
    if (formStep <= 1) return;
    setFormStep(formStep - 1);
  };

  return (
    <div className="card border-0">
      <div className="card-header p-2">
        <h6>GENERATE INVOICE</h6>
      </div>
      <div
        style={{
          maxHeight: "400px",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
        className="card-body"
      >
        {formStep <= 1 && <InvoiceDates />}
        {formStep == 2 && <InvoiceClientDetails />}
        {formStep == 3 && <ProductDetails />}
        {formStep == 4 && <Taxes />}
      </div>
      <div className="card-footer mt-2 d-flex justify-content-end gap-2">
        <button
          className="btn btn-danger"
          onClick={prevStep}
          disabled={formStep === 1 ? true : false}
        >
          Previous
        </button>
        <button
          className="btn btn-danger"
          onClick={nextStep}
          disabled={formStep === 4 ? true : false}
        >
          Next
        </button>
        <button
          className="btn btn-danger"
          onClick={handleSubmit}
          disabled={formStep === 4 ? false : true}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
