const express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/healthz", (req, res) => {
  res.sendStatus(200);
})

app.listen(80);