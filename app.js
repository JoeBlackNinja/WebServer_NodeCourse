require('colors');
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT;

//SERVIR CONTENIDO ESTÁTICO
app.use( express.static('public/road-trip') );

//Renderizado con 'hbs'
app.set('view engine', 'hbs');

//Partials
hbs.registerPartials(__dirname + '/views/partials');

//RUTAS
app.get( '/', (req,res) => {
    res.render('home', {
        nombre: 'Emeterio',
        titulo: 'Curso de Node'
    });
});

app.get( '/home', (req,res) => {
    res.render('home', {
        nombre: 'Emeterio',
        titulo: 'Curso de Node'
    });
});

app.get( '/generic', (req,res) => {
    res.render('generic', {
        nombre: 'Emeterio',
        titulo: 'Curso de Node'
    });
});

app.get( '/elements', (req,res) => {
    res.render('elements', {
        nombre: 'Emeterio',
        titulo: 'Curso de Node'
    });
});

app.get( '*', (req,res) => {
    res.sendFile(__dirname + '/public/Page404.html');
});

app.listen(PORT, () => {
    console.log('Active on PORT: '.bold + `${PORT}`.bgMagenta.black.bold);
});