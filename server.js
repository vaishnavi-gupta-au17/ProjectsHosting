const express = require("express");
const app = express();

app.use(express.static("public"));

console.log(`Heroku Port No is ${process.env.PORT}`);
const prt = process.env.PORT || 3033;
app.listen(prt, () => {
  console.log(`Server Started at PORT ${prt}`);
});
