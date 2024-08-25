import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useInvoices from "../../hooks/useInvoices";

export default function GeneratedInvoicesTable() {
  const { data } = useInvoices();

  return (
    <>
      <div className="card mb-4 rounded-0">
        <div className="card-body" style={{ overflowX: "scroll" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">InvoiceId</th>
                <th scope="col">Client</th>
                <th scope="col">Service</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(({ _id, client, products, status }, index) => (
                <tr key={index}>
                  <th scope="row">
                    <input type="checkbox" />
                  </th>
                  <td>{_id}</td>
                  <td>{client.name}</td>
                  <td>
                    <ul key={index}>
                      {products.map((p, index) => (
                        <li key={index}>{p.description}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{Date.now()}</td>
                  <td>{status}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <div>
                        <Link to={`/invoice/${_id}`} className="text-dark">
                          <RiEdit2Fill />
                        </Link>
                      </div>
                      <div>
                        <a href="#" className="link-danger fs-5">
                          <AiFillDelete />
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
