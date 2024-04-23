const express = require("express");
app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) =>
  res.send("Dockerizing Node Application version docker for revisioning")
);

app.listen(5000, () =>
  console.log(`version 2 ⚡️[bootup]: Server is running at port: 5000`)
);
