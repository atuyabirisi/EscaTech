import { CiMenuBurger } from "react-icons/ci";

export default function NavMenuHumbuger() {
  return (
    <div className="d-flex d-lg-none align-items justify-content-end fs-1">
      <a href="#" className="link-dark">
        <CiMenuBurger />
      </a>
    </div>
  );
}
