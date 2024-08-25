import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import InvoicePdf from "./components/invoiceform/InvoicePdf";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LandingPageLayout from "./components/landing/LandingPageLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <LandingPageLayout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/invoice/:id"
          element={
            <ProtectedRoute>
              <InvoicePdf />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
