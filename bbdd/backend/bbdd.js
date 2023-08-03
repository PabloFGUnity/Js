const mysql = require("mysql2");
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bootcamp2022",
  database: "world",
});
dbConn.connect(errorMySql);

function errorMySql(err) {
  if (err) throw err;
  console.log("Database Connected!");
}
module.exports = dbConn;
