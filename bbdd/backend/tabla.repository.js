const db = require("./bbdd");

function executeQuery(query, params, callback) {
  db.query(query, params, function (err, res) {
    if (err) {
      console.log("error: ", err);
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
}

const Tabla = function (tabla) {
  this.getId = function (id, callback) {
    executeQuery(`Select * from ${tabla} where id = ? `, id, callback);
    return this;
  };
  this.getAll = function (callback) {
    return this;
  };
  this.insert = function (city, callback) {};
  this.update = function (id, city, callback) {};
  this.delete = function (id, callback) {};
};

module.exports = Tabla;
