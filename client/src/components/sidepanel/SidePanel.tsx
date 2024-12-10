import {
  FcSupport,
  FcConferenceCall,
  FcDocument,
  FcComboChart,
} from "react-icons/fc";
import InvoiceSubmenuItem from "./InvoiceSubMenuItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { toggleSidePanelInvoiceItem } from "../../slices/sidepanelSlices/invoiceMenuItemSlice";
import { setHeroScreenState } from "../../slices/heroSectionScreen";

export default function SidePanel() {
  const dispatch: AppDispatch = useDispatch();
  const { toggleInvoiceMenuItem } = useSelector(
    (state: RootState) => state.toggleSidepanelSubmenu
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
              onClick={() => dispatch(toggleSidePanelInvoiceItem(1))}
            >
              <FcDocument />
              <small>Invoices</small>
            </a>
            {toggleInvoiceMenuItem && <InvoiceSubmenuItem />}
          </li>
          <li className="p-2">
            <a
              href="#"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
            >
              <FcConferenceCall />
              <small>Manage clients</small>
            </a>
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
