import InvoiceReceipt from "./InvoiceReceipt";
import PdfOptions from "./PdfOptions";

export default function InvoiceReceiptParent() {
  return (
    <>
      <PdfOptions pdfJsxMarkup={<InvoiceReceipt />} />
      <InvoiceReceipt />
    </>
  );
}
