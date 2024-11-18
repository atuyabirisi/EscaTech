import ForgotPasswordModal from "../modals/ForgotPassModal";
import Login from "./Login";

export default function LoginLayout() {
  return (
    <div>
      <ForgotPasswordModal />
      <Login />
    </div>
  );
}
