import { FcList, FcSettings } from "react-icons/fc";

export default function CustomerSubMenu() {
  return (
    <ul style={{ listStyle: "none" }}>
      <li className="py-2">
        <a
          href="/register-customer"
          className="d-flex align-items-center gap-2 text-decoration-none"
        >
          <FcSettings />
          <small>Register customer</small>
        </a>
      </li>
      <li>
        <a
          href="/manage-customers"
          className="d-flex align-items-center gap-2 text-decoration-none"
        >
          <FcList />
          <small>Manage customers</small>
        </a>
      </li>
    </ul>
  );
}
