import GeneratedInvoicesTable from "../components/manageInvoices/GeneratedInvoicesTable";
import NavParent from "../components/navbar/NavParent";
import SidePanel from "../components/sidepanel/SidePanel";

export default function ManageInvoicesPage() {
  return (
    <div>
      <NavParent />
      <div className="row m-1">
        <div className="d-none d-lg-flex col-lg-3">
          <SidePanel />
        </div>
        <div className="col-lg-9 py-3">
          <GeneratedInvoicesTable />
        </div>
      </div>
    </div>
  );
}
