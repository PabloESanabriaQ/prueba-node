const router = require("./src/routes");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/fizzbuzz", router);

app.get("/", (req, res) => {
  res.send("Use /fizzbuzz to look at my resolution!");
});
