const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hello efe');
});

app.listen(port, () => {
    console.log(`Ejemplo de listening at htpp://localost:${port}`);
})