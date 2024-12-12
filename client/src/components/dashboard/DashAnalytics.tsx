import { useDashBoardCalculations } from "../../hooks/useDashBoardCalculations";
import { useData } from "../../hooks/useData";
import { FormData } from "../manageInvoices/GeneratedInvoicesTable";

export default function DashAnalytics() {
  const { data } = useData<FormData>("/invoice");

  const { totalDueAmount, noOfOpenInvoices, totalSalesAmount } =
    useDashBoardCalculations(data);

  return (
    <div className="row d-flex justify-content-center align-items-center gap-2">
      <div className="col-md-3 bg-warning text-center rounded-top py-3">
        <h3 className="fw-bold">{totalSalesAmount}</h3>
        <h6 className="fw-bold">SALES AMOUNT</h6>
      </div>
      <div className="col-md-3 bg-danger text-center rounded-bottom  py-3">
        <h3 className="fw-bold">{noOfOpenInvoices}</h3>
        <h6 className="fw-bold">OPEN INVOICES</h6>
      </div>
      <div className="col-md-3 bg-primary text-center rounded-top  py-3">
        <h3 className="fw-bold">{totalDueAmount}</h3>
        <h6 className="fw-bold">DUE AMOUNT</h6>
      </div>
    </div>
  );
}
