import { CiMenuBurger } from "react-icons/ci";
import { toggleSidePanel } from "../../slices/toggleSidePanel";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import Profile from "./Profile";

export default function GkNavbar() {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="row bg-light p-2">
      <div className="d-lg-flex justify-content-between">
        <div className="" style={{ width: "75px", height: "75px" }}>
          <img
            src="src\assets\logo.webp"
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-center text-center">
            <h5>ESCATECH SERVICES (K) LTD</h5>
            <h6>INVOICING SYSTEM</h6>
          </div>
          <div className="d-lg-none flex align-items-center fs-1">
            <a
              href="#"
              className="link-dark"
              onClick={() => dispatch(toggleSidePanel())}
            >
              <CiMenuBurger />
            </a>
          </div>
        </div>
        <Profile />
      </div>
    </div>
  );
}
