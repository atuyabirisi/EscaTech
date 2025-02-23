import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginLayout from "./components/auth/LoginLayout";
// import InvoiceReceipt from "./components/invoicePdf/InvoiceReceipt";
import UserAccountsWrapper from "./components/userAccounts/UserAccountsWrapper";
import ManageCustomersPage from "./pages/ManageCustomersPage";
import DashBoardAnalyticsPage from "./pages/DashBoardPage";
import ManageInvoicesPage from "./pages/ManageInvoicesWrapper";
import InvoiceGenerationPage from "./pages/InvoiceGenerationPage";
import RegisterCustomerPage from "./pages/RegisterCustomerWrapper";
import CustomerProfileWrapper from "./components/customers/customerProfile/CustomerProfileWrapper";
import InvoiceReceiptParent from "./components/invoicePdf/InvoiceReceiptParent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />} />
        <Route path="/dashboard" element={<DashBoardAnalyticsPage />} />
        <Route path="/invoice/:id" element={<InvoiceReceiptParent />} />
        {/* <Route path="/invoice-pdf" element={<InvoiceReceipt />} /> */}
        <Route path="/client/:id" element={<CustomerProfileWrapper />} />
        <Route path="/settings" element={<UserAccountsWrapper />} />
        <Route path="/invoices" element={<ManageInvoicesPage />} />
        <Route path="/dashboard" element={<DashBoardAnalyticsPage />} />
        <Route path="/invoice_generation" element={<InvoiceGenerationPage />} />
        <Route path="/register-customer" element={<RegisterCustomerPage />} />
        <Route path="/manage-customers" element={<ManageCustomersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
