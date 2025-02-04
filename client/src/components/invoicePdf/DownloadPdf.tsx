import apiClient from "../../utilities/apiClient";

export default function DownloadPdf() {
  const generatePdf = async () => {
    // const htmlString = ReactDOMServer.renderToStaticMarkup(<PDFContent />);

    await apiClient
      .post(
        "/generate_invoice_pdf",
        { htmlContent: "This is a sample PDF" },
        { responseType: "blob" }
      )
      .then((res) => {
        console.log(res);

        // const blob = new Blob([res.data], { type: "application/pdf" });

        const url = window.URL.createObjectURL(new Blob([res.data]));

        const link = document.createElement("a");

        link.href = url;

        link.setAttribute("download", "generated-pdf.pdf");

        // link.download = "generated-pdf";

        document.body.appendChild(link);

        link.click();

        link.remove();
      })
      .catch((error) => console.log("Error generating PDF:", error));
  };

  return (
    <div>
      <button onClick={generatePdf} className="btn btn-primary">
        Download PDF
      </button>
    </div>
  );
}
