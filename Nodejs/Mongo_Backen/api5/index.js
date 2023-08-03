const express =  require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const cookieParser = require('cookie-parser')


const accountRouter = require('./routes/accountRouter');
const authRouter = require('./routes/authRouter');
const authSessionRouter = require('./routes/authSessionRouter');
const authTokenRouter = require('./routes/authTokenRouter');

dotenv.config();

const PORT = process.env.PORT;
const app = express();


app.use(express.json());
app.use(express.text());
app.use(logger('dev'));
app.use(cookieParser());


app.use("/account", accountRouter);
app.use("/auth",authRouter);
app.use("/auth-session",authSessionRouter);
app.use("/auth-token",authTokenRouter);




//el listen siempre lo ultimo
app.listen(PORT, () => {
  console.log(`Server in port ${PORT}`);
})