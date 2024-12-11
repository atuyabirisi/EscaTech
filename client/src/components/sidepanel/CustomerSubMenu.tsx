import { FcList, FcSettings } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setHeroScreenState } from "../../slices/heroSectionScreen";

export default function CustomerSubMenu() {
  const dispatch: AppDispatch = useDispatch();

  return (
    <ul style={{ listStyle: "none" }}>
      <li className="py-2">
        <a
          href="#"
          className="d-flex align-items-center gap-2 link-dark text-decoration-none"
          onClick={() => {
            dispatch(setHeroScreenState(4));
          }}
        >
          <FcSettings />
          <small>Register customer</small>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="d-flex align-items-center gap-2 link-dark text-decoration-none"
          onClick={() => dispatch(setHeroScreenState(5))}
        >
          <FcList />
          <small>Manage customers</small>
        </a>
      </li>
    </ul>
  );
}
