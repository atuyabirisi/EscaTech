import { useSelector } from "react-redux";
import InvoiceGenerationWorkFlow from "../invoice/InvoiceGenerationWorkFlow";
import DashAnalytics from "../dashboard/DashAnalytics";
import Graph from "../dashboard/Graph";
import SidePanel from "../dashboard/SidePanel";
import { RootState } from "../../store";
import ManageInvoices from "../invoice/ManageInvoices";
import SignUp from "../auth/Signup";
import ManageClients from "../customer/ManageClients";
import UserAccounts from "../useraccounts/UserAccounts";

export default function HeroScreen() {
  const { currentScreen } = useSelector((store: RootState) => store.screen);

  return (
    <div className="row p-1">
      <div className="col-lg-3">
        <SidePanel />
      </div>
      <div className="col-lg-9 py-1 rounded">
        <div className="mb-4">
          {currentScreen == 1 && <DashAnalytics />}
          {currentScreen == 2 && <InvoiceGenerationWorkFlow />}
          {currentScreen == 3 && <ManageInvoices />}
          {currentScreen == 4 && <ManageClients />}
          {currentScreen == 5 && <SignUp />}
          {currentScreen == 6 && <UserAccounts />}
        </div>
        <div
          className="py-3"
          style={{ backgroundColor: "white", maxHeight: "fit-content" }}
        >
          {currentScreen == 1 && <Graph />}
        </div>
      </div>
    </div>
  );
}
