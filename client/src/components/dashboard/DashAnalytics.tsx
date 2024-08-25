import useInvoices from "../../hooks/useInvoices";
import { InvoiceData } from "../../types/typeDefinitions";

export default function DashAnalytics() {
  const { data } = useInvoices();

  function openInvoices(data: InvoiceData[]) {
    let total = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].status == "open") total.push(data[index]);
    }
    return total.length;
  }

  function amountDue(data: InvoiceData[]) {
    let total = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].status == "open") total.push(data[index].grandTotal);
    }
    const dueAmount = total.reduce(function (value, currentitem) {
      return value + currentitem;
    }, 0);
    return dueAmount;
  }
  function sales(data: InvoiceData[]) {
    let total = [];
    for (let index = 0; index < data.length; index++) {
      total.push(data[index].grandTotal);
    }
    const salesAmount = total.reduce(function (value, currentitem) {
      return value + currentitem;
    }, 0);
    return salesAmount;
  }

  const totalOPenInvoices = openInvoices(data);
  const dueMoneies = amountDue(data);
  const salesMonies = sales(data);

  return (
    <div className="row gap-1 mx-2">
      <div className="col-md-3 bg-primary text-center rounded  py-3">
        <h3>{salesMonies}</h3>
        <h6>SALES AMOUNT</h6>
      </div>
      <div className="col-md-3 bg-danger text-center rounded py-3">
        <h3>{data.length}</h3>
        <h6>TOTAL INVOICES</h6>
      </div>
      <div className="col-md-3 bg-info text-center rounded py-3">
        <h3>{totalOPenInvoices}</h3>
        <h6>OPEN INVOICES</h6>
      </div>
      <div className=" col-md-3 bg-warning text-center rounded py-3">
        <h3>{dueMoneies}</h3>
        <h6>DUE AMOUNT</h6>
      </div>
    </div>
  );
}
