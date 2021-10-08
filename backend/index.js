const express = require('express');
const conectarDB = require('./config/db');

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Definir la pagina principal
app.get('/', (req, res) => {
	res.send('Hola Eliab');
});

// Arrancar el servidor
app.listen(PORT, () => {
	console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});
