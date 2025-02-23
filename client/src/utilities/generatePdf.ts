import apiClient from "./apiClient";


export const generatePdf = ( ) => {
    // try {
    //     const response = await fetch("http://localhost:8000/api/generate_pdf", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(pdfData),
    //     });
    
    //     if (!response.ok) {
    //       throw new Error(`Error: ${response.statusText}`);
    //     }
    
    //     const result = await response.json(); // Parse JSON response
    //     console.log(result); // Debugging: Check the response structure
    
    //     // Open the PDF in a new tab
    //     if (result.url) {
    //       window.open(result.url, "_blank");
    //     } else {
    //       console.error("Invalid PDF URL received:", result);
    //     }
    //   } catch (error) {
    //     console.error("Error generating PDF:", error);
    //   }
    // };
    apiClient
    .get("/invoice")
    .then(res => {
        console.log(res.data); // Debugging: check the response structure

      // Extract the URL from the response
    //   const pdfUrl = res.data.url;
      
    //   if (pdfUrl) {
    //     window.open(pdfUrl, "_blank"); // Open in a new tab
    //   } else {
    //     console.error("Invalid PDF URL received:", res.data);
    //   }
    })
    .catch(err => {
        console.error("Error generating PDF:", err);
    });
}
