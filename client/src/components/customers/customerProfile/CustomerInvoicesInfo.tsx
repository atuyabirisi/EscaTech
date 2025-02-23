import { RiDownloadCloud2Fill, RiShareForward2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { dateFormatter } from "../../../utilities/dateFormatter";
import { InvoiceData } from "../../../types/invoiceData";

interface Props {
  invoiceData: InvoiceData[];
}

export default function CustomerInvoicesInfo({ invoiceData }: Props) {
  return (
    <div className="card border-0">
      <div className="card-header bg-light">
        <h6 className="fw-bold text-primary">CLIENT INVOICES</h6>
      </div>
      <div className="card-body" style={{ overflowX: "scroll" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">InvoiceId</th>
              <th scope="col">Service</th>
              <th scope="col">Open Date</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData?.map((invoice) => (
              <tr key={invoice._id}>
                <td>{invoice.invoice_id}</td>
                <td>
                  <ul>
                    {invoice.invoiceItems.map((item, index) => (
                      <li key={index}>{item.description}</li>
                    ))}
                  </ul>
                </td>
                <td>{dateFormatter(invoice.opendate)}</td>
                <td>{invoice.status}</td>
                <td>
                  <div className="d-flex gap-2">
                    <div>
                      <Link to={"#"} className="link-primary">
                        <RiShareForward2Fill />
                      </Link>
                    </div>
                    <div>
                      <Link to={"#"} className="link-primary">
                        <RiDownloadCloud2Fill />
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
