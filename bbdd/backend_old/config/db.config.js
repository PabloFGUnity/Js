"use strict";
const mysql = require("mysql2");
//local mysql db connection //
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bootcamp2022",
  database: "world",
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
