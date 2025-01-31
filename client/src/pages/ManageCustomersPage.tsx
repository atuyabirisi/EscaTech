import ManageCustomers from "../components/customers/ManageCustomers";
import NavParent from "../components/navbar/NavParent";
import MenuHumbuger from "../components/sidepanel/MenuHumbuger";
import SidePanel from "../components/sidepanel/SidePanel";

export default function ManageCustomersPage() {
  return (
    <div>
      <NavParent />
      <MenuHumbuger />
      <div className="row mx-1">
        <div className="d-none d-lg-flex col-lg-3">
          <SidePanel />
        </div>
        <div className="col-lg-9 py-3">
          <ManageCustomers />
        </div>
      </div>
    </div>
  );
}
