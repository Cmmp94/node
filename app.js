//Traemos a express
//No necesitamos poner la ruta porque está instalado
const { response } = require("express");
const express = require("express");

//Constante que será mi aplicación, 
//le diremos que es una aplicación de express
const app = express();

//Definimos un puerto para el servidor
const port = 3000;

//Necesitamos crear rutas
//Podemos enviar código html
app.get("/", (req, res) => {
    res.send(`<h1>HOLA WEY!!</h1>`);
    
});

app.get("/facebook", (req, res) => {
    res.send("Dale vejiga");
});





//Abrimos la escucha, localhost:3000 es la ruta base
app.listen(port, () => {
    console.log("escuchando a http://localhost:"+port);
});

