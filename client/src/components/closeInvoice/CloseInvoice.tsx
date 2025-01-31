import { useDataObject } from "../../hooks/useDataObjects";
import { InvoiceData } from "../../types/invoiceData";
import InvoicePaymentForm from "./InvoicePaymentForm";

export default function CloseInvoice() {
  const { singleRecord } = useDataObject<InvoiceData>(
    `/invoice/${localStorage.getItem("invoiceId")}`
  );

  return (
    <div className="card border-0">
      <div className="card-header">
        <h6 className="text-primary fw-bolder">CLOSE INVOICE</h6>
        <h6 className="text-primary">
          FOR:{" "}
          {singleRecord.client && (
            <span className="fw-bold">
              {singleRecord.client.name.toUpperCase()}
            </span>
          )}
        </h6>
        <h6 className="text-primary">
          INVOICE ID:{" "}
          {singleRecord.invoice_id && (
            <span className="fw-bold">{singleRecord.invoice_id}</span>
          )}
        </h6>
      </div>
      <div className="card-body">
        <InvoicePaymentForm openInvoice={singleRecord} />
      </div>
    </div>
  );
}
