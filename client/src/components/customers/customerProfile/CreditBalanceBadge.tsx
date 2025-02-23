import { FcFactory } from "react-icons/fc";
import { Client } from "../../../types/clientType";

interface Props {
  customerBioData: Client | undefined;
}

export default function CreditBalanceBadge({ customerBioData }: Props) {
  return (
    <div className="card border-0 bg-light h-100 mb-3">
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <div className="fs-2">
          <FcFactory />
        </div>
        <div className="text-center">
          <h6 className="fw-bold">CREDIT BALANCE:</h6>
          <h5 className="fw-bold text-primary">
            KES {customerBioData?.credit}
          </h5>
        </div>
      </div>
      <div className="card-footer text-center">
        <small>Credit balance is accured from overpaid invoices</small>
      </div>
    </div>
  );
}
