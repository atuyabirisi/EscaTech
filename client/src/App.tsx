import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoardLayout from "./components/dashboard/DashboardLayout";
import LoginLayout from "./components/auth/LoginLayout";
import InvoiceReceipt from "./components/invoicePdf/InvoiceReceipt";
import InvoicePdfMarkup from "./components/invoicePdf/InvoicePdfMarkup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />} />
        <Route path="/dashboard" element={<DashBoardLayout />} />
        <Route path="/invoice/:id" element={<InvoiceReceipt />} />
        <Route path="/invoice-pdf" element={<InvoicePdfMarkup />} />
      </Routes>
    </BrowserRouter>
  );
}
