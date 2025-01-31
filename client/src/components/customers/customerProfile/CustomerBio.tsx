import { FcFactory } from "react-icons/fc";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Client } from "../../../types/clientType";

interface Props {
  customerBioData: Client | undefined;
}

export default function CustomerBio({ customerBioData }: Props) {
  return (
    <>
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
            <h5 className="fw-bold text-primary">{customerBioData?.name}</h5>
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
              {customerBioData?._id}
            </li>
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
    </>
  );
}
