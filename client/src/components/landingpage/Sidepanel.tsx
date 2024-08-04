import { MdSpaceDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa";

export default function Sidepanel() {
  return (
    <div>
      <ul style={{ listStyle: "none" }} className="bg-light rounded">
        <li className="p-3 ">
          <a
            href="#"
            className="d-flex align-items-center gap-2 text-decoration-none text-dark"
          >
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </a>
        </li>
        <li className="p-3 my-1">
          <a
            href="#"
            className="d-flex align-items-center gap-2 text-decoration-none text-dark"
          >
            <CgProfile />
            My Profile
          </a>
        </li>

        <li className="p-3 my-1">
          <a
            href="#"
            className="d-flex align-items-center gap-2 text-decoration-none text-dark"
          >
            <HiAcademicCap />
            Academics
          </a>
        </li>
        <li className="p-3 my-1">
          <a
            href="#"
            className="d-flex align-items-center gap-2 text-decoration-none text-dark"
          >
            <FaBookOpen />
            Registration
          </a>
        </li>
        <li className="p-3 mt-4">
          <a
            href="#"
            className="d-flex align-items-center gap-2 text-decoration-none text-dark"
          >
            <IoLogOut />
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
