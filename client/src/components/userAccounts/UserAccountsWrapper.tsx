import { useState } from "react";
import UserRegistrationForm from "../auth/UserRegistrationForm";
import NavParent from "../navbar/NavParent";
import SidePanel from "../sidepanel/SidePanel";
import ManageUserAccounts from "./ManageUserAccounts";

export default function UserAccountsWrapper() {
  const [showRegisterUserForm, setShowRegisterUserForm] = useState(false);
  const [showUserAccounts, setShowUserAccounts] = useState(false);

  const toggleRegisterUserForm = () => {
    setShowRegisterUserForm(!showRegisterUserForm);
    showUserAccounts && setShowUserAccounts(false);
  };

  const toggleUserAccountsTable = () => {
    setShowUserAccounts(!showUserAccounts);
    showRegisterUserForm && setShowRegisterUserForm(false);
  };

  return (
    <>
      <NavParent />
      <div className="row m-1">
        <div className="d-none d-lg-flex col-lg-3">
          <SidePanel />
        </div>
        <div className="col-lg-9 py-3">
          <ul style={{ listStyle: "none" }}>
            <li
              className="mb-2 text-primary"
              style={{ cursor: "pointer" }}
              onClick={toggleRegisterUserForm}
            >
              <small>Register New User</small>
            </li>
            {showRegisterUserForm && <UserRegistrationForm />}
            <li
              className="mb-2  text-primary"
              style={{ cursor: "pointer" }}
              onClick={toggleUserAccountsTable}
            >
              <small>Manage User Accounts</small>
            </li>
            {showUserAccounts && <ManageUserAccounts />}
          </ul>
        </div>
      </div>
    </>
  );
}
