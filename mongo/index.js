const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/prueba");
  const coleccion1Schema = new mongoose.Schema({
    campo1: String,
    campo2: String,
  });
  const Coleccion1 = mongoose.model(
    "coleccion1",
    coleccion1Schema,
    "coleccion1"
  );
  let registros = await Coleccion1.find({});
  console.log(registros);
  const reg = new Coleccion1({ campo1: "valor1", campo2: "valor2" });
  await reg.save();
  const registro1 = await Coleccion1.findOne({ campo1: "valor1" });
  console.log(registro1);
  registro1.campo1 = "valor1 actualizado";
  await registro1.save();
  console.log(registro1);
  // const prueba = new Prueba({ campo1: "valor2" });
  // await prueba.save();
  // pruebas = await Prueba.find();
  // console.log(pruebas);
  // const citySchema = new mongoose.Schema({
  //   ID: Number,
  //   Name: String,
  //   CountryCode: String,
  //   District: String,
  //   Population: Number,
  // });
  // const City = mongoose.model("city", citySchema, "city");
  // const cities = await City.find({}).limit(10);
  // console.log(cities);
  mongoose.connection.close();
}
