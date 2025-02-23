// import axios from "axios";

// export default function DownloadPdf() {
// const handleGeneratePdf = async () => {
//   axios
//     .post("http://localhost:8000/api/generate-pdf", {
//       htmlContent: "hhh",
//     })
//     .then((res) => {
//       const filePathArray = res.data.split("/");
//       const invoiceId = filePathArray.slice(-1);
//       window.open(`http://localhost:8000/invoice_pdf/${invoiceId}`);
//     })
//     .catch((err) => console.log(err));
// try {
//   const response = await fetch("http://localhost:8000/api/generate-pdf", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       htmlContent: "<h1>Hello, World!</h1>",
//     }),
//   });

//   console.log(typeof response);
// if (!response.ok) {
//   throw new Error("Failed to generate PDF");
// }

// const blob = await response.blob();
// const url = window.URL.createObjectURL(blob);

// Create a link and trigger the download
// const a = document.createElement("a");
// a.href = url;
// a.download = "generated-pdf.pdf";
// document.body.appendChild(a);
// a.click();
// document.body.removeChild(a);
//   } catch (error) {
//     console.error("Error:", error);
//     alert("Failed to generate PDF");
//   }
// };
//   return (
//     <div>
//       <button onClick={handleGeneratePdf} className="btn btn-primary">
//         Download PDF
//       </button>
//     </div>
//   );
// }
