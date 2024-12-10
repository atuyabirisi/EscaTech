const express = require("express"),
  router = express.Router(),
  asyncMiddleware = require("../middleware/asyncMiddleware");

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    const { renderToStream } = await import("@react-pdf/renderer");
    const React = await import("react");
    const { Page, Text, View, Document, StyleSheet } = await import(
      "@react-pdf/renderer"
    );

    const styles = StyleSheet.create({
      page: {
        padding: 30,
        fontSize: 12,
      },
      section: {
        marginBottom: 10,
      },
      title: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: "center",
      },
    });

    const MyPDFDocument = ({ data }) =>
      React.createElement(
        Document,
        null,
        React.createElement(
          Page,
          null,
          React.createElement(Text, null, "User Report"),
          data.map((user, index) =>
            React.createElement(
              View,
              { key: index },
              React.createElement(Text, null, user.name)
            )
          )
        )
      );

    const data = [{ name: "John Doe" }, { name: "Jane Doe" }];
    const stream = await renderToStream(
      React.createElement(MyPDFDocument, { data })
    );

    res.setHeader("Content-Type", "application/pdf");
    stream.pipe(res);
  })
);

module.exports = router;
