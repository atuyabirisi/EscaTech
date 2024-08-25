import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/activeUser";
import { FcAdvance } from "react-icons/fc";

export default function Signout() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const signout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <div>
      <li className="p-2 mt-2 bg-light rounded">
        <a
          href="#"
          className="d-flex align-items-center gap-2 text-decoration-none text-dark"
          onClick={signout}
        >
          <FcAdvance />
          <small>Sign out</small>
        </a>
      </li>
    </div>
  );
}
