import NavParent from "../navbar/NavParent";
import SidePanel from "../sidepanel/SidePanel";
import DashAnalytics from "./DashAnalytics";
import DashGraph from "./DashGraph";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import GeneratedInvoicesTable from "../manageInvoices/GeneratedInvoicesTable";
import InvoiceSubFormsParent from "../invoiceGenerationforms/InvoiceSubFormsParent";

export default function DashBoardLayout() {
  const { currentScreen } = useSelector(
    (state: RootState) => state.heroScreenState
  );
  return (
    <>
      <NavParent />
      <div className="row">
        <div className="col-3">
          <SidePanel />
        </div>
        <div className="col-8 pt-3">
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
