import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";

export default function ManageClients() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h6>REGISTERED CLIENTS</h6>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Client Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Physical Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Keithan Investment Ltd</td>
                <td>0798248825</td>
                <td>keithaninc@kin.ac.ke</td>
                <td>51 Suite, Lenana Road, Kilimani-Nairobi</td>
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
    </>
  );
}
