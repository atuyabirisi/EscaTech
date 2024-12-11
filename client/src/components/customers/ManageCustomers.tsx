import { AiFillDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
import { useCustomers } from "../../hooks/useCustomers";
import Paginate from "../pagination/Paginate";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useFirstLastPaginationIndex } from "../pagination/useFirstLastPaginationIndex";

export default function ManageCustomers() {
  const { data, noOfCustomers } = useCustomers();

  const { postsPerPage, currentPage } = useSelector(
    (store: RootState) => store.paginationState
  );

  const { firstIndex, lastIndex } = useFirstLastPaginationIndex(
    postsPerPage,
    currentPage
  );

  const paginatedData = data.slice(firstIndex, lastIndex);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h6>REGISTERED CLIENTS</h6>
        </div>
        <div className="card-body table-responsive">
          <table className="table table-striped text-nowrap">
            <thead>
              <tr>
                <th scope="col">Client Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Email</th>
                <th scope="col">Physical Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((client, index) => (
                <tr key={index}>
                  <td>{client.name}</td>
                  <td>{client.phone}</td>
                  <td>{client.email}</td>
                  <td className="text-wrap">{client.address}</td>
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
              ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          {noOfCustomers > postsPerPage && (
            <Paginate noOfItems={noOfCustomers} />
          )}
        </div>
      </div>
    </>
  );
}
