const express = require("express");
const Repository = require("./tabla.repository");
const CityEntity = require("./city.model");
const app = express();
const port = process.env.PORT || 3000;
const City = new Repository("city");

app.get("/", holaMundo);
app.get("/city/:id", (req, res) => {
  City.getId(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving city.",
      });
    } else {
      const [registro] = data;
      res.send(new CityEntity(registro));
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

function holaMundo(req, res, next) {
  res.send("Hola mundo");
  next();
}
