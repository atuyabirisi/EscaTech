import {
  FcSupport,
  FcConferenceCall,
  FcDocument,
  FcSettings,
  FcList,
  FcBinoculars,
} from "react-icons/fc";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { showGenerateInvoice } from "../../slices/screens";
import Signout from "../auth/Signout";
import {
  showInvoiceSubMenu,
  hideInvoiceSubMenu,
} from "../../slices/toggleInvoiceMenu";

export default function SidePanel() {
  const { invoiceSubMenu } = useSelector(
    (store: RootState) => store.invoiceSubMenu
  );

  const dispatch: AppDispatch = useDispatch();

  const showInvoiceSub = () => {
    dispatch(showInvoiceSubMenu());
  };

  const dispatcher = (screen: number) => {
    dispatch(showGenerateInvoice(screen));
    dispatch(hideInvoiceSubMenu());
  };

  const InvoiceSubMenuDispatcher = (screen: number) => {
    dispatch(showGenerateInvoice(screen));
  };

  return (
    <div className="card h-100 w-100">
      <ul style={{ listStyle: "none" }}>
        <div className="card-body">
          <li className="p-2">
            <a
              href="#"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
              onClick={() => dispatcher(1)}
            >
              <FcBinoculars />
              <small>Dashboard</small>
            </a>
          </li>
          <li className="p-2">
            <a
              href="#"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
              onClick={showInvoiceSub}
            >
              <FcDocument />
              <small>Invoices</small>
            </a>
            {invoiceSubMenu && (
              <ul style={{ listStyle: "none" }}>
                <li className="mb-2">
                  <a
                    href="#"
                    className="d-flex align-items-center gap-2 link-dark text-decoration-none"
                    onClick={() => InvoiceSubMenuDispatcher(2)}
                  >
                    <FcSettings />
                    <small>Generate invoice</small>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="d-flex align-items-center gap-2 link-dark text-decoration-none"
                    onClick={() => InvoiceSubMenuDispatcher(3)}
                  >
                    <FcList />
                    <small>Manage invoices</small>
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="p-2">
            <a
              href="#"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
              onClick={() => dispatcher(4)}
            >
              <FcConferenceCall />
              <small>Manage clients</small>
            </a>
          </li>
          <li className="p-2">
            <a
              href="#"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
              onClick={() => dispatcher(6)}
            >
              <FcSupport />
              <small>User accounts</small>
            </a>
          </li>
        </div>
        <div className="card-footer">
          <Signout />
        </div>
      </ul>
    </div>
  );
}
