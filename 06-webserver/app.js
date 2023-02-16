const express = require('express');
const app = express();
const port = 8080;

// Servir contenido estatico

app.use(express.static('resources'));

// app.get('/hola-mundo', (req, res) => {
//     res.send('Hola mundo en su respectiva ruta');
// });

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/resources/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/resources/elemets.html');
});

app.get('*', (req, res) => {
    res.send('404 ! Page not found');
});

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
});