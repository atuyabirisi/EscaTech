import DashAnalytics from "../components/dashboard/DashAnalytics";
import DashGraph from "../components/dashboard/DashGraph";
import NavParent from "../components/navbar/NavParent";
import MenuHumbuger from "../components/sidepanel/MenuHumbuger";
import SidePanel from "../components/sidepanel/SidePanel";

export default function DashBoardAnalyticsPage() {
  return (
    <div>
      <NavParent />
      <MenuHumbuger />
      <div className="row mx-1">
        <div className="d-none d-lg-flex col-lg-3">
          <SidePanel />
        </div>
        <div className="col-lg-9 py-3">
          <DashAnalytics />
          <DashGraph />
        </div>
      </div>
    </div>
  );
}
