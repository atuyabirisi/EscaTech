import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";

export default function ManageUserAccounts() {
  return (
    <div className="card border-0 fs-6">
      <div className="card-header">
        <small className="text-primary fw-bold">USER CREDENTIALS</small>
      </div>
      <div
        className="card-body rounded bg-light my-1"
        style={{ overflowX: "scroll" }}
      >
        <table className="table text-secondary">
          <thead>
            <tr>
              <th scope="col">
                <small>ID</small>
              </th>
              <th scope="col">
                <small>Username</small>
              </th>
              <th scope="col">
                <small>Email</small>
              </th>
              <th scope="col">
                <small>Phone Number</small>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <small>{"SBIRHA1811"}</small>
              </td>
              <td>
                <small>{"atuya"}</small>
              </td>
              <td>
                <small>{"tushhamphrey@gmail.com"}</small>
              </td>
              <td>
                <small>{"0798248825"}</small>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <div>
                    <a href="#">
                      <RiEdit2Fill />
                    </a>
                  </div>
                  <div>
                    <a href="#">
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
  );
}
