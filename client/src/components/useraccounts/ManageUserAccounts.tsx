import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";

export default function ManageUserAccounts() {
  return (
    <div className="card fs-6">
      <div className="card-header">
        <h6>
          <small>Manage User Accounts</small>
        </h6>
      </div>
      <div className="card-body" style={{ overflowX: "scroll" }}>
        <table className="table text-secondary">
          <thead>
            <tr>
              <th scope="col">
                <small>Username</small>
              </th>
              <th scope="col">
                <small>Email</small>
              </th>
              <th scope="col">
                <small>Phone Number</small>
              </th>
              <th scope="col">
                <small>Role</small>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <small>tushhamphrey</small>
              </td>
              <td>
                <small>tushhamphrey@gmail.com</small>
              </td>
              <td>
                <small>0798248825</small>
              </td>
              <td>
                <small>root</small>
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
            <tr>
              <td>
                <small>alekigakanga</small>
              </td>
              <td>
                <small>gakangalex@gmail.com</small>
              </td>
              <td>
                <small>0798248825</small>
              </td>
              <td>
                <small>admin</small>
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
