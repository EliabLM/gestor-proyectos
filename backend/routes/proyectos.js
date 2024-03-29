const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const auth = require('../middlewares/auth');
const { check } = require('express-validator');

// Crea proyectos
// api/proyectos
router.post(
	'/',
	auth,
	[check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()],
	proyectoController.crearProyecto
);

// Obtener proyectos
router.get('/', auth, proyectoController.obtenerProyectos);

// Actualizar proyecto por Id
router.put(
	'/:id',
	auth,
	[check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()],
	proyectoController.actualizarProyecto
);

// Elimina un proyecto por su Id
router.delete('/:id', auth, proyectoController.eliminarProyecto);

module.exports = router;
