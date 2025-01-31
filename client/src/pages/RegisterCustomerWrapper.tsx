import RegisterCustomer from "../components/customers/RegisterCustomer";
import NavParent from "../components/navbar/NavParent";
import MenuHumbuger from "../components/sidepanel/MenuHumbuger";
import SidePanel from "../components/sidepanel/SidePanel";

export default function RegisterCustomerPage() {
  return (
    <div>
      <NavParent />
      <MenuHumbuger />
      <div className="row mx-1">
        <div className="d-none d-lg-flex col-lg-3">
          <SidePanel />
        </div>
        <div className="col-lg-9 py-3">
          <RegisterCustomer />
        </div>
      </div>
    </div>
  );
}
