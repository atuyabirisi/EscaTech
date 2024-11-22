import { Link } from "react-router-dom";

export default function NavLogo() {
  return (
    <div className="d-flex justify-content-center">
      <Link to={"/dashboard"}>
        <div style={{ width: "100px", height: "100px" }}>
          <img
            src="src\assets\logo.webp"
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </Link>
    </div>
  );
}
