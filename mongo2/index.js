const mongoose = require("mongoose");

const mongoUri = "mongodb://localhost:27017/prueba";

const main = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Conectado a mongo");
    const usuarioSchema = new mongoose.Schema({
      nombre: String,
      edad: Number,
      email: String,
      direccion: {
        calle: String,
        numero: Number,
        ciudad: String,
      },
    });
    usuarioSchema.methods.saludar = function () {
      console.log("Hola, soy " + this.nombre);
    };
    const Usuario = mongoose.model("Usuario", usuarioSchema, "usuario");
    // crearUsuario(Usuario, "Juan", 25, "a@b.com");
    // crearUsuario(Usuario, "Pedro", 30, "c@d.com");
    // crearUsuario(Usuario, "Maria", 35, "h@j.com");
    const juan = await Usuario.find({ nombre: "xPedro" });
    console.log(juan);
    // juan.email = "arroba@queteroba.com";
    // juan.save();
  } catch (error) {
    console.log("Error al conectar a mongo", error);
  }
};

function crearUsuario(modelo, nombre, edad, email) {
  const usuario = new modelo({
    nombre,
    edad,
    email,
    direccion: {
      calle: "Calle falsa",
      numero: 123,
      ciudad: "Springfield",
    },
  });
  usuario.save();
}

main();
