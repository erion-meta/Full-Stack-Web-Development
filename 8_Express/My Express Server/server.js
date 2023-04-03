const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send(
    "I am Erion Meta <br> Student at Faculty of Economy <br> Field: Business Informatics"
  );
});

app.get("/contact", (req, res) => {
  res.send("Contact me <br> email: erion@gmail.com <br> num: 0674738684 ");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
