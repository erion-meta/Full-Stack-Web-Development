const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const city = req.body.cityName;
  const appKey = "be48a7525a1e2ba3ac463ba12acc3cc2";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&units=${units}`;

  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);

      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      res.write("<html>");
      res.write(`<h3>The weather is currently ${description} </h3>`);
      res.write(
        `<h1>The temperature in ${city} is ${temp} celcius degrees</h1>`
      );
      res.write(`<img src="${imgURL}" alt = "${description}"> `);
      res.write("</html>");

      res.send();
    });
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
