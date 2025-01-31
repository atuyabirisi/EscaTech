import { useSelector } from "react-redux";
import { RootState } from "../../store";
import InvoiceDates from "./InvoiceDates";
import InvoiceClientDetails from "./InvoClientDetailsForm";
import InvoiceItems from "./InvoiceItems";
import InvoiceTaxes from "./InvoiceTaxes";

export default function InvoiceSubFormsWrapper() {
  const { stepNumber } = useSelector(
    (state: RootState) => state.invoiceFormSteps
  );

  return (
    <div className="card border-0">
      <div className="card-header p-2">
        <h6 className="text-primary fw-bold">GENERATE INVOICE</h6>
      </div>
      <div
        style={{
          maxHeight: "400px",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
        className="card-body"
      >
        {stepNumber <= 1 && <InvoiceDates />}
        {stepNumber === 2 && <InvoiceClientDetails />}
        {stepNumber === 3 && <InvoiceItems />}
        {stepNumber === 4 && <InvoiceTaxes />}
      </div>
    </div>
  );
}
