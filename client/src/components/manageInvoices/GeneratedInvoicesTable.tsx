import {
  RiEdit2Fill,
  RiShareForward2Fill,
  RiDownloadCloud2Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export default function GeneratedInvoicesTable() {
  return (
    <>
      <div className="card mb-4">
        <div className="card-body" style={{ overflowX: "scroll" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">InvoiceId</th>
                <th scope="col">Client</th>
                <th scope="col">Service</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"SBIRHA1811"}</td>
                <td>{"Logrl Systems Ltd"}</td>
                <td>
                  <ul>
                    <li>{"Elevetor Repair"}</li>
                    <li>{"50w Batteries"}</li>
                  </ul>
                </td>
                <td>{Date.now()}</td>
                <td>{"Closed"}</td>
                <td>
                  <div className="d-flex gap-2">
                    <div>
                      <RiEdit2Fill />
                    </div>
                    <div>
                      <Link to={"#"} className="link-success">
                        <RiShareForward2Fill />
                      </Link>
                    </div>
                    <div>
                      <Link to={"#"} className="link-success">
                        <RiDownloadCloud2Fill />
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{"SALEGA1811"}</td>
                <td>{"Sapama Tech Ltd"}</td>
                <td>
                  <ul>
                    <li>{"Elevetor Repair"}</li>
                  </ul>
                </td>
                <td>{Date.now()}</td>
                <td>{"Open"}</td>
                <td>
                  <div className="d-flex gap-2">
                    <div>
                      <RiEdit2Fill />
                    </div>
                    <div>
                      <Link to={"#"} className="link-success">
                        <RiShareForward2Fill />
                      </Link>
                    </div>
                    <div>
                      <Link to={"#"} className="link-success">
                        <RiDownloadCloud2Fill />
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-footer"></div>
      </div>
    </>
  );
}
