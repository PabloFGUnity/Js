const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PabolSQL",
  database: "world",
});
db.connect(errorMySql);

function errorMySql(err) {
  if (err) throw err;
  console.log("Database Connected!");
}

db.query("select * from city ",callback);
function callback(err,datos,campos)
{
    if (err)
    {
        throw err
    }
    const cities =datos.map(item => new City (item))
    console.log(cities);
    
    let suma=0;
    for (const item of cities)
    {
      suma += item.Population
    }
    console.log(suma);

    suma = cities.reduce((a,b) => a+b.Population , 0)
    console.log(suma);
}

function City(city)
{
    this.ID=city.ID;
    this.Name=city.Name;
    this.CountryCode=city.CountryCode;
    this.District=city.District;
    this.Population=city.Population;
}