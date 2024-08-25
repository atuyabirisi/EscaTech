import Navbar from "../navbar/GkNavbar";
import HeroScreen from "./HeroScreen";

export default function LandingPageLayout() {
  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <div className="mb-3">
        <Navbar />
      </div>
      <div>
        <HeroScreen />
      </div>
    </div>
  );
}
