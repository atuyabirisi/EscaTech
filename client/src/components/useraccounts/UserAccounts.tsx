import { useState } from "react";
import Signup from "../auth/Signup";
import ManageUserAccounts from "./ManageUserAccounts";

export default function UserAccounts() {
  const [showSignup, setShowSignUp] = useState(false);
  const [showManageUserAcc, setShowManageUserAcc] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignup);
    showManageUserAcc && setShowManageUserAcc(false);
  };

  const toggleManageUserAccs = () => {
    setShowManageUserAcc(!showManageUserAcc);
    showSignup && setShowSignUp(false);
  };

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li className="mb-2">
          <a
            href="#"
            className="d-flex align-items-center gap-2 link-primary"
            onClick={toggleSignUp}
          >
            <small>Register new user</small>
          </a>
        </li>
        {showSignup && <Signup />}
        <li className="mb-2">
          <a
            href="#"
            className="d-flex align-items-center gap-2 link-primary"
            onClick={toggleManageUserAccs}
          >
            <small>Manage user accounts</small>
          </a>
        </li>
        {showManageUserAcc && <ManageUserAccounts />}
      </ul>
    </div>
  );
}
