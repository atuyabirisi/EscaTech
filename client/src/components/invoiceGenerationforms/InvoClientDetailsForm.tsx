import { useForm } from "react-hook-form";
import { FcAdvance, FcDownLeft } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { FormEvent } from "react";
import { goBack, setStepNumber } from "../../slices/invoiceFormSteps";
import { toggleCustomerRegModal } from "../../slices/customerRegSlice";
import CustomerRegModal from "../modals/CustomerRegModal";
import { useData } from "../../hooks/useData";
import { setInvoiceFormData } from "../../slices/invoice/invoiceFormData";

interface Client {
  _id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}

export default function InvoiceClientDetails() {
  const { register, getValues } = useForm(),
    { data } = useData<Client>("/register_client"),
    dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(setInvoiceFormData(getValues()));
    dispatch(setStepNumber(3));
  };

  const goOneStepBack = () => dispatch(goBack());

  return (
    <div>
      <CustomerRegModal />
      <div className="card mb-3 border-0">
        <div className="card-header border-bottom-0 rounded-0 p-2">
          <h6>
            <b>Client Details</b>
          </h6>
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
                {data.map(({ name, address, _id }, index) => (
                  <option
                    key={index}
                    value={_id}
                  >{`${name} ${address}`}</option>
                ))}
              </select>
            </div>
            <div className="mb-3 d-flex justify-content-end">
              <a
                href="#"
                className="link-primary fs-6"
                onClick={() => dispatch(toggleCustomerRegModal())}
              >
                Register New Customer
              </a>
            </div>
            <div className=" d-flex justify-content-end gap-3">
              <button className="btn btn-danger" onClick={goOneStepBack}>
                <span className="px-2">
                  <FcDownLeft />
                </span>
                Go Back
              </button>
              <button className="btn btn-danger" type="submit">
                Next
                <span className="px-2">
                  <FcAdvance />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
