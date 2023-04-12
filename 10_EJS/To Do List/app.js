const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// variables
let items = ["Sleep", "Eat", "Pray"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/css", express.static("css"));

app.get("/", (req, res) => {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
