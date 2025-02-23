import InvoiceAddedItems from "./InvoiceAddedItems";
import InvoiceItems from "./InvoiceItems";
import NavigationButtons from "./NavigationButtons";

export default function InvoiceItemsWrapper() {
  return (
    <div>
      <InvoiceItems />
      <InvoiceAddedItems />
      <NavigationButtons nextNumber={4} />
    </div>
  );
}
