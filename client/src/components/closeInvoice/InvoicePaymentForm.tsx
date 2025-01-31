import { ChangeEvent, useEffect } from "react";
import { InvoiceData } from "../../types/invoiceData";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { updateInvoicePaymentData } from "../../slices/invoice/invoicePaymentData";
import listofBanks from "../../data/bankList";
import { usePayInvoice } from "../../hooks/usePayInvoice";

type Props = {
  openInvoice: InvoiceData;
};

export default function InvoicePaymentForm({ openInvoice }: Props) {
  const { payInvoice } = usePayInvoice();

  const dispatch: AppDispatch = useDispatch();

  const invoicePaymentForm = useSelector(
    (state: RootState) => state.invoicePaymentData.invoicePaymentFormData
  );

  useEffect(() => {
    dispatch(
      updateInvoicePaymentData({
        invoice_id: openInvoice.invoice_id,
        amount_due: openInvoice.grandTotal,
      })
    );
  }, [dispatch, openInvoice.invoice_id, openInvoice.grandTotal]);

  const handleInputFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    dispatch(
      updateInvoicePaymentData({ [e.currentTarget.name]: e.target.value })
    );
  };

  const onCloseInvoice = () => {
    payInvoice(invoicePaymentForm);
  };

  return (
    <div>
      <div className="row mb-2">
        <div className="col-5">
          <label htmlFor="invoice_id">Invoice ID</label>
          <input
            type="text"
            id="invoice_id"
            className="form-control"
            defaultValue={openInvoice.invoice_id}
            onChange={handleInputFieldChange}
            readOnly
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-5">
          <label htmlFor="amount_due" className="form-label">
            Amount Due
          </label>
          <input
            type="number"
            id="amount_due"
            className="form-control"
            defaultValue={openInvoice.outstandingBalance}
            readOnly
          />
        </div>
        <div className="col-7">
          <label htmlFor="payed_amount" className="form-label">
            Payed Amount
          </label>
          <input
            type="number"
            id="payed_amount"
            name="payed_amount"
            className="form-control"
            value={invoicePaymentForm.payed_amount}
            onChange={handleInputFieldChange}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-5">
          <label htmlFor="payment_date" className="form-label">
            Payment Date
          </label>
          <input
            type="date"
            id="payment_date"
            name="payment_date"
            className="form-control"
            value={invoicePaymentForm.payment_date}
            onChange={handleInputFieldChange}
          />
        </div>
        <div className="col-7">
          <label htmlFor="payment_method" className="form-label">
            Payment Method
          </label>
          <select
            id="payment_method"
            name="payment_method"
            className="form-control"
            value={invoicePaymentForm.payment_method}
            onChange={handleInputFieldChange}
          >
            <option value="" disabled />
            <option value="bank_transfer">BANK TRANSFER</option>
            <option value="mobile_money">MOBILE MONEY</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        {invoicePaymentForm.payment_method === "bank_transfer" && (
          <div className="col-5">
            <label htmlFor="bank_name" className="form-label">
              Bank Name
            </label>
            <select
              id="bank_name"
              name="bank_name"
              className="form-control"
              value={invoicePaymentForm.bank_name}
              onChange={handleInputFieldChange}
            >
              <option value="" disabled />
              {listofBanks.map((bank, index) => (
                <option value={bank} key={index}>
                  {bank}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="col-7">
          <label htmlFor="transaction_reference" className="form-label">
            Transaction Reference No
          </label>
          <input
            type="text"
            id="transaction_reference"
            name="transaction_reference"
            className="form-control"
            value={invoicePaymentForm.transaction_reference}
            onChange={handleInputFieldChange}
          ></input>
        </div>
      </div>
      <div className="d-flex justify-content-end px-4">
        <button className="btn btn-danger" onClick={onCloseInvoice}>
          Make Payment
        </button>
      </div>
    </div>
  );
}
