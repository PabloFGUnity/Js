const express =  require('express');
const { USERS_BBDD} = require('./bbdd');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.text());


app.get('/account/:guid', (req, res) => {
    const {guid} = req.params;
    const user = USERS_BBDD.find(user => user.guid === guid);

    if(!user) return res.status(404).send('La cuenta no existe')

    return res.send(user)
});

app.post('/account', (req, res) => {
    const {guid,name} = req.body;

    if(!guid || !name) return res.status(400).send('Error en el body');

    const user = USERS_BBDD.find(user => user.guid === guid);

    if(user) return res.status(409).send('La cuenta ya existe');

    USERS_BBDD.push({guid,name});

    return res.sendStatus(201);
});

app.patch('/account/:guid', (req, res) => {
    const {guid} = req.params;
    const {name} = req.body

    if (!name) return res.status(400);
    const user = USERS_BBDD.find(user => user.guid === guid);
    if (!user) return res.status(404).send("La cuenta no existe");
    user.name = name

    return res.send(user)

});

app.delete('/account/:guid', (req, res) => {
    const {guid} = req.params;
    const userIndex = USERS_BBDD.findIndex(user => user.guid === guid);

    if(userIndex === -1) return res.status(404).send('La cuenta no existe');

    USERS_BBDD.splice(userIndex,1);

    return res.sendStatus(200)
});

//el listen siempre lo ultimo
app.listen(PORT, () => {
  console.log(`Server in port ${PORT}`);
})