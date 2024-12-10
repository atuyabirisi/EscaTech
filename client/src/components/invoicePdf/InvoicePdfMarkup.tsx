import { useEffect } from "react";
import apiClient from "../../utilities/apiClient";

export default function InvoicePdfMarkup() {
  useEffect(() => {
    apiClient
      .get("/generate-pdf")
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        console.log(pdfBlob);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return <h4>Pdf Generated</h4>;
}
