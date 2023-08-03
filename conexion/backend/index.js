const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");


app.use(express.json());
app.use(cors());

app.get("/hello", (request, response) => {
    response.send("Hello world!");
});

app.get("/querystring", (request, response) => {
    console.log(request.query);

    response.send(request.query);
});

app.post("/login", (request, response) => {
    console.log(request.body);

    const email = request.body.email;
    const password = request.body.password;

    console.log(email, password);

    if (email === "israel@email.com" && password === "12345678") {
        response.send("usuario correcto");
    } else {
        response.status(401).send();
    }
});

app.get("/productos", (request, response) => {
    
});

app.post("/pedidos", (request, response) => {
    const ahora = new Date();
    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1;
    const anio = ahora.getFullYear();

    const fecha = `${anio}-${mes}-${dia}`;

    
});

app.listen(8000, () => {
    console.log("Escuchando peticiones...");
});
