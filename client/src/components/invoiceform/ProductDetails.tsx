import { ChangeEvent, FormEvent } from "react";
import { setProductsData } from "../../slices/products";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setFormProdutsData } from "../../slices/invoiceform";
import { resetProductsForm } from "../../slices/products";

export default function ProductDetails() {
  const dispatch: AppDispatch = useDispatch();

  const { description, quantity, unitprice, amount } = useSelector(
    (state: RootState) => state.productsCart.productData
  );

  const productData = useSelector(
    (state: RootState) => state.productsCart.productData
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setProductsData({ [e.currentTarget.name]: e.target.value }));
  };

  const addProductToInvoice = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setFormProdutsData(productData));
    dispatch(resetProductsForm());
  };

  return (
    <form onSubmit={addProductToInvoice}>
      <div className="card border-0 mb-3">
        <div className="card-header border-bottom-0 p-2">
          <h6>Add Product/Service to Invoice</h6>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="description">Description</label>
            <textarea
              rows={2}
              className="w-100 form-control"
              placeholder="Brief Description"
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="quantity">Quantity</label>
              <input
                name="quantity"
                id="quantity"
                type="number"
                className="form-control"
                value={quantity}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="unitprice">Unit Price</label>
              <input
                name="unitprice"
                id="unitprice"
                type="number"
                className="form-control"
                value={unitprice}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="subtotal">Subtotal</label>
              <input
                name="subtotal"
                id="subtotal"
                type="number"
                className="form-control"
                value={amount}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary" type="submit">
          Add product/service to Invoice
        </button>
      </div>
    </form>
  );
}
