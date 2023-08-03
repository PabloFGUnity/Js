"use strict";
const db = require("./config/db.config");
//Country
const City = function (city) {
  this.id = city.ID;
  this.countryCode = city.CountryCode;
  this.name = city.Name;
  this.district = city.District;
  this.population = city.Population;
};
City.create = function (newCity, result) {
  db.query("INSERT INTO city set ?", newCity, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
City.findById = function (id, result) {
  db.query("Select * from City where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
City.findAll = function (result) {
  db.query("Select * from City", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Citys : ", res);
      res = City.format(res);
      result(null, res);
    }
  });
};
City.update = function (id, City, result) {
  db.query(
    "UPDATE City SET countryCode=?,name=?,district=?,population=? WHERE id = ?",
    [City.countryCode, City.name, City.district, City.population, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
City.delete = function (id, result) {
  dbConn.query("DELETE FROM City WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
City.format = function (citys) {
  return citys.map((city) => new City(city));
};

module.exports = City;
