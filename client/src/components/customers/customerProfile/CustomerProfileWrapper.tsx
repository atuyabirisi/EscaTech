import { useParams } from "react-router-dom";
import CustomerBio from "./CustomerBio";
import { useDataObject } from "../../../hooks/useDataObjects";
import { Client } from "../../../types/clientType";
import { useData } from "../../../hooks/useData";
import CustomerInvoicesInfo from "./CustomerInvoicesInfo";
import { FormData } from "../../manageInvoices/GeneratedInvoicesTable";
import NavParent from "../../navbar/NavParent";

export default function CustomerProfileWrapper() {
  const { id } = useParams();

  const { singleRecord } = useDataObject<Client>(`/register_client/${id}`);
  const { data } = useData<FormData>(`/client/${id}`);

  return (
    <>
      <NavParent />
      <div className="row mx-1">
        <div className="col-4">
          <CustomerBio customerBioData={singleRecord} />
        </div>
        <div className="col-8">
          <CustomerInvoicesInfo invoiceData={data} />
        </div>
      </div>
    </>
  );
}
