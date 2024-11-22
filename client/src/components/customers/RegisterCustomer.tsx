import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { ClientSchema } from "../../schemas/invoiceClientShema";
import { createResource } from "../../hooks/useCreateResource";
import { toggleCustomerRegModal } from "../../slices/customerRegSlice";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";

export default function RegisterCustomer() {
  const { register, getValues } = useForm<ClientSchema>();
  const { postRequest } = createResource();
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    postRequest("/register_client", getValues());
    dispatch(toggleCustomerRegModal());
  };

  return (
    <div className="p-1 h-100">
      <div className="text-center mb-3 py-3">
        <h6>REGISTER NEW CLIENT</h6>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              {...register("phone")}
              id="phone"
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              {...register("email")}
              id="email"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Physical Address
            </label>
            <input
              {...register("address")}
              id="address"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3 d-grid">
            <button className="btn btn-danger" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
