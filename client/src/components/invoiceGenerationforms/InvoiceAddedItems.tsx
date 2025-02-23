import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { removeInvoiceProduct } from "../../slices/invoice/invoiceFormData";

export default function InvoiceAddedItems() {
  const dispatch: AppDispatch = useDispatch();

  const updateInvoiceItems = (index: number) =>
    dispatch(removeInvoiceProduct(index));

  const { invoiceItems } = useSelector(
    (state: RootState) => state.invoiceFormData.formData
  );

  return (
    <div className="card border-0 mb-1">
      <div className="card-header">
        <h6 className="text-primary">
          <b>ADDED SERVICES</b>
        </h6>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.unitPrice}</td>
              <td>{item.subtotal}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateInvoiceItems(index)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
