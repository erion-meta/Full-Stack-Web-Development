const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/", (req, res) => {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);

  let bmi = weight / (height * height);
  const msg = `Weight is ${weight} <br> Height is ${height} <br> The result is ${bmi}`;

  res.send(msg);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
