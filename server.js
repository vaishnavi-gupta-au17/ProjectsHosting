const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3030, () => {
  console.log("Server Started at Port 3030");
});
