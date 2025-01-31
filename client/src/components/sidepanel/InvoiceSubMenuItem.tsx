import { FcList, FcSettings } from "react-icons/fc";

export default function InvoiceSubmenuItem() {
  return (
    <ul style={{ listStyle: "none" }}>
      <li className="py-2">
        <a
          href="/invoice_generation"
          className="d-flex align-items-center gap-2 text-decoration-none"
        >
          <FcSettings />
          <small>Generate invoice</small>
        </a>
      </li>
      <li>
        <a
          href="/invoices"
          className="d-flex align-items-center gap-2 text-decoration-none"
        >
          <FcList />
          <small>Manage invoices</small>
        </a>
      </li>
    </ul>
  );
}
