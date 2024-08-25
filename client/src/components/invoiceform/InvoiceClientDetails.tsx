import { openClientRegModal } from "../../slices/clientreg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import ClientModal from "../modals/ClientRegModal";
import { setFormData } from "../../slices/invoiceform";
import { useForm } from "react-hook-form";
import { FormEvent } from "react";
import useClients from "../../hooks/useClients";

export default function InvoiceClientDetails() {
  const { data } = useClients();
  const { register, getValues } = useForm();

  const dispatch: AppDispatch = useDispatch();
  const registerClient = () => dispatch(openClientRegModal());

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setFormData(getValues()));
  };

  return (
    <div>
      <ClientModal />
      <div className="card mb-3 border-0">
        <div className="card-header border-bottom-0 rounded-0 p-2">
          <h6>Client Details</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="client">Select Client</label>
              <select
                {...register("client")}
                className="form-control"
                id="client"
              >
                {data?.map(({ _id, name, address }, index) => (
                  <option value={_id} key={index}>
                    {name} - {address}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3 d-flex justify-content-end">
              <a
                href="#"
                className="link-primary fs-6"
                onClick={registerClient}
              >
                Register New Customer
              </a>
            </div>
            <div className=" d-flex justify-content-end">
              <button className="btn btn-secondary">
                Update client Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
