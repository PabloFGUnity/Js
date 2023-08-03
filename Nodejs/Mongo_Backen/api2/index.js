const express =  require('express');
const dotenv = require('dotenv');
const accountRouter = require('./routes/accountRouter');
const logger = require('morgan')

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.text());
app.use(logger('dev'));
app.use("/account", accountRouter);



//el listen siempre lo ultimo
app.listen(PORT, () => {
  console.log(`Server in port ${PORT}`);
})