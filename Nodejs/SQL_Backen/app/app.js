const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload")
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");


dotenv.config();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(
    fileUpload({
        createParentPath:true,
        limits: { fileSize: 20 * 1024 * 1024},
        abortOnLimit: true,
        responseOnLimit: "Archivo demasiado grande",
        uploadTimeout: 0
    })
);

app.use(cors())

app.use("/user", userRoute)
app.use("/product", productRoute)
app.use("/order",orderRoute)




module.exports = app;