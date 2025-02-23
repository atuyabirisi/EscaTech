import { useParams } from "react-router-dom";
import { useDataObject } from "../../../hooks/useDataObjects";
import { Client } from "../../../types/clientType";
import { useData } from "../../../hooks/useData";
import CustomerInvoicesInfo from "./CustomerInvoicesInfo";
import NavParent from "../../navbar/NavParent";
import { InvoiceData } from "../../../types/invoiceData";
import CreditBalanceBadge from "./CreditBalanceBadge";
import CustomerBioData from "./CustomerBioData";
import CustomerName from "./CustomerName";

export default function CustomerProfileWrapper() {
  const { id } = useParams();

  const { singleRecord } = useDataObject<Client>(`/register_client/${id}`);
  const { data } = useData<InvoiceData>(`/client/${id}`);

  return (
    <>
      <NavParent />
      <div className="row m-2">
        <div className="col-4">
          <CustomerName customerBioData={singleRecord} />
        </div>
        <div className="col-4">
          <CreditBalanceBadge customerBioData={singleRecord} />
        </div>
      </div>
      <div className="row m-2">
        <div className="col-4">
          <CustomerBioData customerBioData={singleRecord} />
        </div>
        <div className="col-8">
          <CustomerInvoicesInfo invoiceData={data} />
        </div>
      </div>
    </>
  );
}
