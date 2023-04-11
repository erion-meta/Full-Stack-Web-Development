const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  let day = "";

  switch (currentDay) {
    case 0:
      day = "saturday";
      break;

    case 1:
      day = "monday";
      break;

    case 2:
      day = "tuesday";
      break;

    case 3:
      day = "wednesday";
      break;

    case 4:
      day = "thursday";
      break;

    case 5:
      day = "friday";
      break;

    case 6:
      day = "saturday";
      break;

    default:
      day = "day!";
      break;
  }
  res.render("list", { kindOfDay: day });
});

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
