import NavCompanyName from "./NavCompanyName";
import NavLogo from "./NavLogo";
import NavProfile from "./NavProfile";

export default function NavParent() {
  return (
    <div className="row p-2 bg-light">
      <div className="col-lg-4 col-md-12">
        <NavLogo />
      </div>
      <div className="col-lg-4 col-md-12 d-flex justify-content-center">
        <NavCompanyName />
      </div>
      <div className="col-lg-4 col-md-6 d-flex justify-content-end">
        <NavProfile />
      </div>
    </div>
  );
}
