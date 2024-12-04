import NavParent from "../navbar/NavParent";
import SidePanel from "../sidepanel/SidePanel";
import DashAnalytics from "./DashAnalytics";
import DashGraph from "./DashGraph";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import GeneratedInvoicesTable from "../manageInvoices/GeneratedInvoicesTable";
import InvoiceSubFormsParent from "../invoiceGenerationforms/InvoiceSubFormsParent";
import MenuHumbuger from "../sidepanel/MenuHumbuger";

export default function DashBoardLayout() {
  const { currentScreen } = useSelector(
    (state: RootState) => state.heroScreenState
  );
  return (
    <>
      <NavParent />
      <MenuHumbuger />
      <div className="row mx-1">
        <div className="d-none d-lg-flex col-lg-3">
          <SidePanel />
        </div>
        <div className="col-lg-9 py-3">
          {currentScreen === 1 && (
            <>
              <DashAnalytics />
              <div className="py-4">
                <DashGraph />
              </div>
            </>
          )}
          {currentScreen === 2 && <InvoiceSubFormsParent />}
          {currentScreen === 3 && <GeneratedInvoicesTable />}
        </div>
      </div>
    </>
  );
}
