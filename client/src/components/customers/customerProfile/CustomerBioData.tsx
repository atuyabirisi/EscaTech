import { RiEdit2Fill } from "react-icons/ri";
import { Client } from "../../../types/clientType";
import { Link } from "react-router-dom";

interface Props {
  customerBioData: Client | undefined;
}

export default function CustomerBioData({ customerBioData }: Props) {
  return (
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
          <li className="list-group-item border-0 ">{customerBioData?._id}</li>
          <li className="list-group-item border-0 border-top">
            {customerBioData?.email}
          </li>
          <li className="list-group-item border-0 border-top">
            {customerBioData?.phone}
          </li>
          <li className="list-group-item border-0 border-top">
            {customerBioData?.address}
          </li>
        </ul>
      </div>
    </div>
  );
}
