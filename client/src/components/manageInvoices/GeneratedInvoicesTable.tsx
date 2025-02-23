import { IoLockClosed } from "react-icons/io5";
import { HiLockOpen } from "react-icons/hi2";
import { useData } from "../../hooks/useData";
import { dateFormatter } from "../../utilities/dateFormatter";
import Paginate from "../pagination/Paginate";
import { useFirstLastPaginationIndex } from "../pagination/useFirstLastPaginationIndex";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { toggleCloseInvoiceModal } from "../../slices/invoice/closeInvoiceSlice";
import CloseInvoiceModal from "../modals/CloseInvoiceModal";
import { InvoiceData } from "../../types/invoiceData";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcDocument } from "react-icons/fc";

export default function GeneratedInvoicesTable() {
  const { data, dataCount } = useData<InvoiceData>("/invoice");

  const { postsPerPage, currentPage } = useSelector(
    (store: RootState) => store.paginationState
  );

  const dispatch: AppDispatch = useDispatch();

  const { firstIndex, lastIndex } = useFirstLastPaginationIndex(
    postsPerPage,
    currentPage
  );

  const paginatedInvoices = data.slice(firstIndex, lastIndex);

  const generatePDF1 = async (pdfData: InvoiceData) => {
    try {
      const response = await fetch("http://localhost:8000/api/generate_pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pdfData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json(); // Parse JSON response

      // Open the PDF in a new tab
      if (result.url) {
        window.open(result.url, "_blank");
      } else {
        console.error("Invalid PDF URL received:", result);
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <>
      <CloseInvoiceModal />
      <div className="card border-0 mb-4">
        <div className="card-header">
          <h6 className="text-primary fw-bold">GENERATED INVOICES</h6>
        </div>
        <div
          className="card-body rounded bg-light my-1"
          style={{ overflowX: "scroll" }}
        >
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">InvoiceId</th>
                <th scope="col">Client</th>
                <th scope="col">Service</th>
                <th scope="col">Open Date</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedInvoices.length === 0 ? (
                <tr>
                  <td colSpan={6}>Ooops!...No invoices available</td>
                </tr>
              ) : (
                paginatedInvoices.map((invoice) => (
                  <tr key={invoice._id}>
                    <td>{invoice.invoice_id}</td>
                    <td>{invoice.client?.name}</td>
                    <td>
                      <ul>
                        {invoice.invoiceItems.map((item, index) => (
                          <li key={index}>{item.description}</li>
                        ))}
                      </ul>
                    </td>
                    <td>{dateFormatter(invoice.opendate)}</td>
                    <td>{invoice.status}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className={
                            invoice.status === "closed"
                              ? "btn btn-primary disabled"
                              : "btn btn-primary"
                          }
                          onClick={() => {
                            dispatch(toggleCloseInvoiceModal());
                            localStorage.setItem("invoiceId", invoice._id);
                          }}
                        >
                          {invoice.status === "closed" ? (
                            <IoLockClosed />
                          ) : (
                            <HiLockOpen />
                          )}
                        </button>
                        <button className="btn btn-info">
                          <Link
                            to={`/invoice/${invoice._id}`}
                            className="link-dark"
                          >
                            <IoMdEye />
                          </Link>
                          View
                        </button>

                        <button
                          className="btn btn-info"
                          onClick={() => generatePDF1(invoice)}
                        >
                          <FcDocument />
                          pdf
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <Paginate noOfItems={dataCount} />
        </div>
      </div>
    </>
  );
}
