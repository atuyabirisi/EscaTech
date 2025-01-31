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

    await page.setContent("<h1>Test PDF</h1><p>This should be in the PDF</p>", {
      waitUntil: "domcontentloaded",
    });

    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

    res.send(pdfBuffer);
  })
);

module.exports = router;
