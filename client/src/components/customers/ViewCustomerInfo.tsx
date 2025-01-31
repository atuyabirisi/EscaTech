import { Link, useParams } from "react-router-dom";
import NavParent from "../navbar/NavParent";
import {
  RiDownloadCloud2Fill,
  RiEdit2Fill,
  RiShareForward2Fill,
} from "react-icons/ri";
import { FcFactory } from "react-icons/fc";
import { useData } from "../../hooks/useData";
import { FormData } from "../manageInvoices/GeneratedInvoicesTable";
import { dateFormatter } from "../../utilities/dateFormatter";
import { useDataObject } from "../../hooks/useDataObjects";
import { Client } from "../../types/clientType";

export default function ViewCustomerInfo() {
  const { id } = useParams();

  const { singleRecord } = useDataObject<Client>(`/register_client/${id}`);

  const { data } = useData<FormData>(`/client/${id}`);

  return (
    <>
      <NavParent />
      <div className="row mx-1">
        <div className="col-4">
          <div className="card border-0 mb-3" style={{ overflowY: "hidden" }}>
            <div
              className="card-body cardColors"
              style={{ minHeight: " 100px" }}
            ></div>
            <div className="card-footer">
              <div className="fs-2">
                <FcFactory />
              </div>
              <div>
                <h6 className="fw-bold">CLIENT NAME:</h6>
                <h5 className="fw-bold text-primary">{singleRecord?.name}</h5>
              </div>
            </div>
          </div>
          <div className="card border-0" style={{ overflowY: "hidden" }}>
            <div className="card-header d-flex justify-content-between align-items-center">
              <h6 className="fw-bold">CLIENT INFO</h6>
              <div>
                <Link to="#" className="text-dark">
                  <RiEdit2Fill />
                </Link>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item border-0 ">
                  {singleRecord?._id}
                </li>
                <li className="list-group-item border-0 border-top">
                  {singleRecord?.email}
                </li>
                <li className="list-group-item border-0 border-top">
                  {singleRecord?.phone}
                </li>
                <li className="list-group-item border-0 border-top">
                  {singleRecord?.address}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-8">
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
                  {data?.map((invoice) => (
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
        </div>
      </div>
    </>
  );
}
