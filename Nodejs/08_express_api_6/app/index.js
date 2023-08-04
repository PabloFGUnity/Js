const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

// importamos los routers
const accountRouter = require("./routes/accountRouter");
const authRouter = require("./routes/authRouter");
const authSessionRouter = require("./routes/authSessionRouter");
const authTokenRouter = require("./routes/authTokenRouter");


// Añadimos el método config de dotenv
dotenv.config();

// Definimos el puerto y utilizamos las variables de entorno
const PORT = process.env.PORT || 3000; 
const app = express();

// --- middlewares de express ---
app.use(express.json());
app.use(express.text());
app.use(logger('dev'));
app.use(cookieParser());

// --- api middlewares ---
// middleware que hemos importado del router accountRouter
app.use("/account", accountRouter);
// middleware que hemos importado del router authRouter
app.use("/auth", authRouter);
// middleware para authSessionRouter
app.use("/auth-session", authSessionRouter);
app.use("/auth-token", authTokenRouter);


// Levantamos el servidor en el puerto 3000
app.listen(PORT, () =>
    console.log(`Server in port ${PORT}`)
);