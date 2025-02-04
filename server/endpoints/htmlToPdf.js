const express = require("express");
const router = express.Router();
const path = require("path");
const puppeteer = require("puppeteer-core");
const asyncMiddleware = require("../middleware/asyncMiddleware");

router.post(
  "/",
  asyncMiddleware(async (req, res) => {
    const { htmlContent } = req.body;

    if (!htmlContent) return res.status(400).send("HTML content is required");

    const browser = await puppeteer.launch({
      channel: "chrome",
      headless: "new",
    });

    const page = await browser.newPage();

    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
    });

    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="generated-pdf.pdf"'
    );

    res.send(pdfBuffer);
  })
);

module.exports = router;
