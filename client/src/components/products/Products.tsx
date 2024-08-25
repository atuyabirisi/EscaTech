import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";

export default function Products() {
  return (
    <>
      <div className="card mb-4 rounded-0">
        <div className="card-header">
          <h6>Manage products and services</h6>
        </div>
        <div className="card-body" style={{ overflowX: "scroll" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">ProductId</th>
                <th scope="col">Name</th>
                <th scope="col">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>sbirha1911</td>
                <td>Ard Batteries</td>
                <td>{3400}</td>
                <td>
                  <div className="d-flex gap-2">
                    <div>
                      <a href="#" className="link-danger fs-5">
                        <RiEdit2Fill />
                      </a>
                    </div>
                    <div>
                      <a href="#" className="link-danger fs-5">
                        <AiFillDelete />
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
