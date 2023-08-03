const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Bootcamp2022",
  database: "world",
});
db.connect(errorMySql);

function errorMySql(err) {
  if (err) throw err;
  console.log("Database Connected!");
}

// db.query(
//   "SELECT country.name, city.name FROM country join city on country.capital = city.id",
//   (err, result, fields) => {
//     if (err) throw err;
//     console.log(result);
//     console.log(fields);
//   }
// );

// function getAllCountries() {
//   return new Promise((resolve, reject) => {
//     db.query("SELECT * FROM country", (err, result) => {
//       if (err) reject(err);
//       resolve(result);
//     });
//   });
// }

// getAllCountries()
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
