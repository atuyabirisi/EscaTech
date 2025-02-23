import { FcFactory } from "react-icons/fc";
import { Client } from "../../../types/clientType";

interface Props {
  customerBioData: Client | undefined;
}

export default function CustomerName({ customerBioData }: Props) {
  return (
    <>
      <div className="card border-0 mb-3 h-100" style={{ overflowY: "hidden" }}>
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
    </>
  );
}
