import { FieldValues, useForm } from "react-hook-form";
import { FcAdvance, FcDownLeft } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { goBack, setStepNumber } from "../../slices/invoice/invoiceFormSteps";
import { toggleCustomerRegModal } from "../../slices/toggleCustomerReg";
import CustomerRegModal from "../modals/CustomerRegModal";
import { useData } from "../../hooks/useData";
import { setInvoiceFormData } from "../../slices/invoice/invoiceFormData";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InvoiceClient,
  invoiceClientSchema,
} from "../../schemas/invoiceFormSchemas/invoiceItemsSchema";
import { Client } from "../../types/clientType";

export default function InvoiceClientDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceClient>({
    resolver: zodResolver(invoiceClientSchema),
  });
  const dispatch: AppDispatch = useDispatch();

  const { data } = useData<Client>("/register_client");

  const onSubmit = (data: FieldValues) => {
    dispatch(setInvoiceFormData(data));
    dispatch(setStepNumber(3));
  };

  const goOneStepBack = () => dispatch(goBack());

  return (
    <div>
      <CustomerRegModal />
      <div className="card mb-3 border-0">
        <div className="card-header border-bottom-0 p-2">
          <h6 className="fw-bold text-primary">Client Details</h6>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label htmlFor="client">Select Client</label>
              <select
                {...register("client")}
                className="form-control"
                id="client"
              >
                <option value=""></option>
                {data.map(({ name, address, _id }, index) => (
                  <option
                    key={index}
                    value={_id}
                  >{`${name} ${address}`}</option>
                ))}
              </select>
              {errors.client && (
                <p className="text-danger">{errors.client.message}</p>
              )}
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
