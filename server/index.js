const express = require("express");
const app = express();
const path = require("path");
const port = 8000;
const messages = require("./message.json");
const members = require("./members.json");

app.get("/", (req, res) =>
  res.sendFile(path.resolve("../client/build/index.html"))
);

app.get("/static/:folder/:file", (req, res) => {
  res.sendFile(
    path.resolve(
      `../client/build/static/${req.params.folder}/${req.params.file}`
    )
  );
});

app.get("/members", (req, res) => {
  res.status(200).json({ data: members });
});

app.get("/message", (req, res) => {
  res.status(200).json({ data: messages });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
