// ir a node_modules y acceder a la librería a través de
// la variable express
const express = require("express");
// ir a node_modules y acceder a la librería a través de
// la variable bodyParser
const bodyParser = require("body-parser");
const router = require("./city.routes");
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api", router);
// app.get("/", (req, res) => {
//   City.findAll((err, cities) => {
//     console.log(cities);
//     res.send(cities);
//   });
// });
const db = require("./config/db.config");
// listen for requests
console.log(port);
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
