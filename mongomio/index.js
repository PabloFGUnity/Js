const mongoose = require ('mongoose');

const mongoUri = 'mongodb://localhost:27017/prueba';

const main = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log("conectado a mongo");
        const usuarioSchema= new mongoose.Schema({
            nombre: String,
            edad: Number,
            email:String,
        });

        usuarioSchema.methods.saludar = function () {
            console.log("Hola, soy" + this.nombre);
        }

        const Usuario = mongoose.model("Usuario",usuarioSchema,"usuario")
        crearUsuario(Usuario,"Pablo",20,"hola@hotmail.com")
        crearUsuario(Usuario,"Lola",67,"hola@gmail.com")
        crearUsuario(Usuario,"Carlo",45,"adios@gmail.com")
        // await usuario.save();
        // usuario.saludar();
        console.log("Usuario guardado");
    }   catch (error) {
        console.log("Error al conectar al mongo",error);
    }
};

function crearUsuario(modelo,nombre,edad,email){
    const usuario = new modelo({
        nombre,
        edad,
        email
    });
    usuario.save();
}

main();