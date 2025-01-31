import { ReactNode } from "react";
import ReactDOMServer from "react-dom/server";
import apiClient from "../../utilities/apiClient";

interface Props {
  pdfComponent: ReactNode;
}

const PDFContent = () => (
  <div>
    <h1>Invoice</h1>
    <p>Customer: John Doe</p>
    <p>Total: $100</p>
  </div>
);

export default function DownloadPdf({ pdfComponent }: Props) {
  const generatePdf = async () => {
    // const htmlString = ReactDOMServer.renderToStaticMarkup(<PDFContent />);

    await apiClient
      .post(
        "/generate_invoice_pdf",
        { htmlContent: "<h1>Hello, PDF!</h1><p>This is a sample PDF</p>" },
        { responseType: "blob" }
      )
      .then((res) => {
        console.log(res);

        const blob = new Blob([res.data], { type: "application/pdf" });

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.download = "generated-pdf";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={generatePdf} className="btn btn-primary">
        Download PDF
      </button>
    </div>
  );
}
