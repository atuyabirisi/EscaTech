import {
  FcSupport,
  FcConferenceCall,
  FcDocument,
  FcComboChart,
} from "react-icons/fc";
import InvoiceSubmenuItem from "./InvoiceSubMenuItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import CustomerSubMenu from "./CustomerSubMenu";
import {
  toggleCutomerSubMenu,
  toggleInvoiceSubMenu,
} from "../../slices/invoice/toggleSubMenus";

export default function SidePanel() {
  const dispatch: AppDispatch = useDispatch();
  const { invoiceSubMenuState, customerSubMenuState } = useSelector(
    (state: RootState) => state.toggleSidepanelSubmenus
  );

  return (
    <div className="card border-0 rounded-sm bg-light">
      <ul style={{ listStyle: "none" }}>
        <div className="card-body">
          <li className="p-2">
            <a
              href="/dashboard"
              className="d-flex align-items-center gap-2 text-decoration-none link-primary"
            >
              <FcComboChart />
              <small>Dashboard</small>
            </a>
          </li>
          <li
            className="p-2"
            onClick={() => dispatch(toggleInvoiceSubMenu())}
            style={{ cursor: "pointer" }}
          >
            <FcDocument />
            <small className="px-2 text-primary">Invoices</small>
            {invoiceSubMenuState && <InvoiceSubmenuItem />}
          </li>
          <li
            className="p-2"
            onClick={() => dispatch(toggleCutomerSubMenu())}
            style={{ cursor: "pointer" }}
          >
            <FcConferenceCall />
            <small className="px-2 text-primary">Customers</small>
            {customerSubMenuState && <CustomerSubMenu />}
          </li>
          <li className="p-2">
            <a
              href="/settings"
              className="d-flex align-items-center gap-2 text-decoration-none link-primary"
            >
              <FcSupport />
              <small>User accounts</small>
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}
