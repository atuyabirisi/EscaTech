const express = require("express");
const router = express.Router();
const path = require("path");
const puppeteer = require("puppeteer-core");
const GenerateInvoiceModel = require("../models/generateInvoiceModel");

router.post("/", async (req, res) => {
  try {
    const {
      invoice_id,
      opendate,
      duedate,
      client: { phone, name, address, email },
      invoiceItems,
      total,
      grandTotal,
      vat,
    } = req.body;

    if (!req.body) return res.status(400).send("HTML content is required");

    const browser = await puppeteer.launch({
      channel: "chrome",
      headless: "new",
    });

    const page = await browser.newPage();

    const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
          *{
            font-family: 'Courier New', Courier, monospace;
            max-width: 100%;
            max-height: 100%;
            box-sizing: border-box;
          }
          .pdfcolor
          {
            background: linear-gradient(135deg, rgb(231, 15, 141) 50%, rgb(80, 3, 204) 50%);
            color: wheat;
          }
          .cardColors
          {
            background: linear-gradient(rgb(253, 93, 186) 50%, rgb(124, 58, 231) );
          }
          .backdrop-color
          {
            background: rgb(0, 0, 0);
            opacity: 10;
          }
        </style>
        </head>
        <body>
          <div class = "m-2 p-2 border rounded"
            <div class="card">
              <div class="card-header"></div>
              <div class="card-body">
                <div class="d-flex w-100">
                <div class="w-100 d-flex justify-content-end align-items-center">
                </div>
                <div class="w-100">
                      <div>
                        <h3 class="text-end">
                            <b>Escatech Services Ltd</b>
                        </h3>
                      </div>
                      <div class="d-flex flex-column align-items-end">
                        <h6>P.O.BOX 58851-00200, Nairobi</h6>
                        <h6>Tel: 0720 532586</h6>
                        <h6>Email: escatech2012@gmail.com</h6>
                        <h6>VAT Number: 000004420255574</h6>
                      </div>
                    </div>
                </div>
                <div class="col-4 py-2">
                    <h3><b>Invoice</b></h3>
                    <h6>Invoice No: ${invoice_id}</h6>
                    <h6>Open Date: ${opendate}</h6>
                    <h6>Due Date: ${duedate}</h6>
                  </div>
                <div class="d-flex justify-content-between mb-5">
                  <div>
                    <h3><b>Invoiced to:</b></h3>
                    <h6>${name}</h6>
                    <h6>${address}</h6>
                    <h6>${email}</h6>
                    <h6>${phone}</h6>
                  </div>
                  <div>
                    <h3><b>Payment Information</b></h3>
                    <h6>Bank: Kenya Commercial Bank</h6>
                    <h6>Account Name: Escatech Services Ltd</h6>
                    <h6>Account Number: 425242323487</h6>
                  </div>
                </div>
                <div class="mb-2">
                  <table class="table table-bordered table-striped rounded-md my-4">
                    <thead class="table-light text-center">
                      <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                    ${invoiceItems
                      .map(
                        ({ description, quantity, unitPrice, subtotal }) => `
                      <tr>
                        <td>${description}</td>
                        <td>${quantity}</td>
                        <td>${unitPrice}</td>
                        <td>${subtotal}</td>
                      </tr>   
                       `
                      )
                      .join("")}        
                      <tr class="border">
                        <td rowspan="3"></td>
                        <td colspan="2"><b>SUBTOTAL</b></td>
                        <td><b>${total}</b></td>
                      </tr>
                      <tr>
                        <td colspan="2"><b>V.A.T</b></td>
                        <td><b>${vat}</b></td>
                      </tr>
                      <tr>
                        <td colspan="2"><b>GRAND TOTAL</b></td>
                        <td><b>${grandTotal}</b></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="row mt-4">
                  <div class="col-lg-4 d-flex flex-column justify-content-center text-center">
                    <div class="border-bottom mb-1">
                      <h5><b>Terms and Conditions</b></h5>
                    </div>
                    <p>
                      Please make payment within 30 days of receiving this invoice.
                      There will be a 10% interest charge per month on late payment.
                    </p>
                  </div>
                  <div class="col-lg-4 text-center">
                    <div class="border-bottom"></div>
                    <h5>Alex Gakanga</h5>
                    <h6>Director</h6>
                  </div>
                </div>
              </div>
              <div class="card-footer border-2 text-center pdfcolor">
                <small><b>Dealers in installation, repair and maintenance of lifts and escalators, electrical services</b></small>              
              </div>
            </div>
          </div>  
        </body>
        </html>
      `;

    await page.goto(`data:text/html,${encodeURIComponent(htmlContent)}`, {
      waitUntil: "networkidle2",
    });

    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
    });

    // Define storage path
    const suffix = Math.ceil(Math.random() * 10000000);
    const pdfName = `${invoice_id}${suffix}.pdf`;
    const pdfPath = path.join(__dirname, `../invoicepdfs/${pdfName}`);

    await page.pdf({ path: pdfPath, format: "A4" });

    await browser.close();

    res.setHeader("Content-Type", "application/pdf");

    const resourceUrl = `http://localhost:8000/invoicepdfs/${pdfName}`;

    const invoiceRecord = await GenerateInvoiceModel.find({
      invoice_id: invoice_id,
    });

    invoiceRecord.pdfLink = resourceUrl;

    // res.send(pdfBuffer);
    res.status(200).json({
      url: resourceUrl,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
