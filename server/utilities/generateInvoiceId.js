const GenerateInvoiceModel = require("../models/generateInvoiceModel");

async function generateInvoiceId() {
  const prefix = "ESCA";

  const invoiceDate = new Date().toString().split(" ");

  const invoiceYearPrefix = invoiceDate[3];

  let suffixNo;

  const lastInvoice = await GenerateInvoiceModel.find()
    .sort({ createdAt: -1 })
    .limit(1);

  if (lastInvoice.length !== 0) {
    const suffix = lastInvoice[0].invoice_id.slice(-1);
    suffixNo = parseInt(suffix) + 1;
  } else {
    suffixNo = 1;
  }

  return `${prefix}/${invoiceYearPrefix}/${suffixNo}`;
}

module.exports = generateInvoiceId;
