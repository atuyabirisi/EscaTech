import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "../../utilities/apiClient";
import { InvoiceData } from "../../types/invoiceData";

export default function InvoiceReceipt() {
  const [data, setData] = useState<InvoiceData>();

  const { id } = useParams();

  useEffect(() => {
    apiClient
      .get(`/invoice/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="m-2">
      <div className="card p-1 border">
        <div className="card-header pdfcolor" />
        <div className="card-body">
          <div className="d-flex justify-content-end">
            <div className="w-100 d-flex justify-content-between align-items-center">
              <div>
                <img src="\src\assets\paid.png" alt="paid_stamp" />
              </div>
            </div>
            <div className="pb-2">
              <div
                className="d-flex w-100 justify-content-center"
                style={{ width: "100px", height: "100px" }}
              >
                <img
                  src="\src\assets\logo.webp"
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h3 className="text-center">
                <b>Escatech Services Ltd</b>
              </h3>
              <h6>P.O.BOX 58851-00200, Nairobi</h6>
              <h6>Tel: 0720 532586</h6>
              <h6>Email: escatech2012@gmail.com</h6>
              <h6>VAT Number: 000004420255574</h6>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-4 py-2">
              <h3>
                <b>Invoice</b>
              </h3>
              <h6>Invoice no: {data?.invoice_id}</h6>
              <h6>Invoice Date: {data?.createdAt}</h6>

              <h6>Due Date: {data?.duedate}</h6>
            </div>
            <div className=" border-bottom" />
          </div>
          <div className="d-flex justify-content-between mb-5">
            <div>
              <h3>
                <b>Invoiced to:</b>
              </h3>
              <h6>{data?.client.name}</h6>
              <h6>{data?.client.address}</h6>
              <h6>{data?.client.email}</h6>
              <h6>{`0${data?.client.phone}`}</h6>
            </div>

            <div>
              <h3>
                <b>Payment Information</b>
              </h3>
              <h6>Bank: Kenya Commercial Bank</h6>
              <h6>Account Name: Escatech Services Ltd</h6>
              <h6>Account Number: 425242323487</h6>
            </div>
          </div>
          <div className="mb-4">
            <table
              className="table table-bordered table-striped rounded my-4"
              style={{ overflow: "hidden" }}
            >
              <thead className="table-light text-center">
                <tr>
                  <th scope="col">Description</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {data?.invoiceItems.map((product, index) => (
                  <tr key={index}>
                    <td>{product.description}</td>
                    <td>{product.quantity}</td>
                    <td>{product.unitPrice}</td>
                    <td>{product.subtotal}</td>
                  </tr>
                ))}
                <tr className="border">
                  <td rowSpan={3} />
                  <td colSpan={2}>
                    <b>SUBTOTAL</b>
                  </td>
                  <td>
                    <b>{data?.total}</b>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <b>V.A.T</b>
                  </td>
                  <td>
                    <b>{data?.vat}</b>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <b>GRAND TOTAL</b>
                  </td>
                  <td>
                    <b>{data?.grandTotal}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 d-flex flex-column justify-content-center text-center">
              <div className="border-bottom mb-1">
                <h5>
                  <b>Terms and Conditions</b>
                </h5>
              </div>
              <p>
                Please make payment within 30 days of receiving this
                invoice.There will be a 10% interest charge per month on late
                payment
              </p>
            </div>

            <div className="col-lg-4" />
            <div className="col-lg-4 text-center">
              <div className="border-bottom">
                <img src="\src\assets\sign.PNG" alt="signature" />
              </div>
              <div className="border-bottom" />
              <h5>Alex Gakanga</h5>
              <h6>Director</h6>
            </div>
          </div>
        </div>
        <div className="card-footer border-2 text-center   pdfcolor">
          <small>
            <b>Escatech services ltd</b>
          </small>
          <br />
          <small>
            <b>
              Dealers in installation, repair and maintenance of lifts and
              escalators, electrical services
            </b>
          </small>
          <br />
          <small>
            <b>Invoice Generated on: {Date.now()}</b>
          </small>
        </div>
      </div>
    </div>
  );
}
