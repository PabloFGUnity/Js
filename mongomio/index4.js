const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/prueba");
  const citySchema = new mongoose.Schema({
    ID: Number,
    Name: String,
    CountryCode: String,
    District: { type: String, required: true },
    Population: Number,
  });
  const countrySchema = new mongoose.Schema({
    Code: String,
    Name: String,
    Continent: String,
    Region: String,
    SurfaceArea: Number,
    IndepYear: Number,
    Population: Number,
    LifeExpectancy: Number,
    GNP: Number,
    GNPOld: Number,
    LocalName: String,
    GovernmentForm: String,
    HeadOfState: String,
    Capital: Number,
    Code2: String,
  });
  countrySchema.virtual("Cities", {
    ref: "city",
    localField: "Code",
    foreignField: "CountryCode",
  });

  citySchema.virtual("Country", {
    ref: "country",
    localField: "CountryCode",
    foreignField: "Code",
  });

  const City = mongoose.model("city", citySchema, "cities");

  const Country = mongoose.model("country", countrySchema, "countries");

  const cities= await Country.findOne({Code: "ESP"}).populate("Cities").exec();
  console.log(cities.Cities);

  const city= await City.findOne({Name:"Madrid"}).populate("Country").exec();
  console.log(city.Country);

  console.log("fin");
  mongoose.connection.close();



};