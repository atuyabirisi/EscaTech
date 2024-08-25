import GeneratedInvoicesTable from "./GeneratedInvoicesTable";
import ClientFilter from "./ClientFilter";
import DateFilter from "./DateFilter";

export default function ManageInvoices() {
  return (
    <div className="card">
      <div className="card-header">
        <h6>GENERATED INVOICES</h6>
      </div>
      <div className="d-flex gap-4 my-2">
        <DateFilter />
        <ClientFilter />
      </div>
      <div>
        <GeneratedInvoicesTable />
      </div>
    </div>
  );
}
