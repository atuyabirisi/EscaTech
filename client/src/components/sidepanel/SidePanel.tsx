import {
  FcSupport,
  FcConferenceCall,
  FcDocument,
  FcComboChart,
} from "react-icons/fc";
import InvoiceSubmenuItem from "./InvoiceSubMenuItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setHeroScreenState } from "../../slices/heroSectionScreen";
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
    <div className="card border-0 rounded-0 bg-light">
      <ul style={{ listStyle: "none" }}>
        <div className="card-body">
          <li className="p-2">
            <a
              href="#"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
              onClick={() => dispatch(setHeroScreenState(1))}
            >
              <FcComboChart />
              <small>Dashboard</small>
            </a>
          </li>
          <li className="p-2">
            <a
              href="#"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
              onClick={() => dispatch(toggleInvoiceSubMenu())}
            >
              <FcDocument />
              <small>Invoices</small>
            </a>
            {invoiceSubMenuState && <InvoiceSubmenuItem />}
          </li>
          <li className="p-2">
            <a
              href="#"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
              onClick={() => dispatch(toggleCutomerSubMenu())}
            >
              <FcConferenceCall />
              <small>customers</small>
            </a>
            {customerSubMenuState && <CustomerSubMenu />}
          </li>
          <li className="p-2">
            <a
              href="#"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
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
