const express = require('express');
const conectarDB = require('./config/db');

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Definir la pagina principal
app.get('/', (req, res) => {
	res.send('Hola Eliab');
});

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));

// Arrancar el servidor
app.listen(PORT, () => {
	console.log(`El servidor esta corriendo en el puerto ${PORT}`);
});
