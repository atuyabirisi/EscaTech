import { FieldValues, useForm } from "react-hook-form";
import { createResource } from "../../hooks/useCreateResource";
import { toggleCustomerRegModal } from "../../slices/customerRegSlice";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import {
  ClientRegType,
  clientRegschema,
} from "../../schemas/invoiceClientShema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function RegisterCustomer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientRegType>({
    resolver: zodResolver(clientRegschema),
  });
  const { postRequest } = createResource();
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (data: FieldValues) => {
    postRequest("/register_client", data);
    dispatch(toggleCustomerRegModal());
  };

  return (
    <div className="p-1 h-100">
      <div className="text-center mb-3 py-3">
        <h6>REGISTER NEW CLIENT</h6>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
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
            {errors.phone && (
              <p className="text-danger">{errors.phone.message}</p>
            )}
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
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
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
            {errors.address && (
              <p className="text-danger">{errors.address.message}</p>
            )}
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
