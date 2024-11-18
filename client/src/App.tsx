import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UserRegistrationForm from "./components/auth/UserRegistrationForm";
import DashBoardLayout from "./components/dashboard/DashboardLayout";
import LoginLayout from "./components/auth/LoginLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />} />
        <Route path="/dashboard" element={<DashBoardLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
