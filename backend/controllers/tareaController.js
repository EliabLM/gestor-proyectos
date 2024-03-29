const Tarea = require('../models/Tarea');
const Proyecto = require('../models/Proyecto');
const { validationResult } = require('express-validator');

// Crea una nueva tarea
exports.crearTarea = async (req, res) => {
  // Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  // Extraer el proyecto y comprobar si existe
  const { proyecto } = req.body;
  try {
    const existeProyecto = await Proyecto.findById(proyecto);
    if (!existeProyecto) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' });
    }

    // Revisar si el proyecto pertenece al usuario autenticado
    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: 'No autorizado' });
    }

    // Crear la tarea
    const tarea = new Tarea(req.body);
    await tarea.save();
    res.json({ tarea });
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error');
  }
};

exports.obtenerTareas = async (req, res) => {
  try {
    // Extraer el proyecto
    const { proyecto } = req.query;
    const existeProyecto = await Proyecto.findById(proyecto);
    if (!existeProyecto) {
      return res.status(404).json({ msg: 'Proyecto no encontrado' });
    }

    // Revisar si el proyecto pertenece al usuario autenticado
    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: 'No autorizado' });
    }

    // Obtener las tareas por proyecto
    const tareas = await Tarea.find({ proyecto });
    res.json({ tareas });
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error');
  }
};

exports.actualizarTarea = async (req, res) => {
  try {
    // Extraer el proyecto
    const { proyecto, nombre, estado } = req.body;

    // Revisar si la tarea existe
    let tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      return res.status(404).json({ msg: 'No existe esa tarea' });
    }

    // Revisar si el proyecto pertenece al usuario autenticado
    const existeProyecto = await Proyecto.findById(proyecto);

    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: 'No autorizado' });
    }

    // Crear un objeto con la nueva información
    const nuevaTarea = {};
    nuevaTarea.nombre = nombre;
    nuevaTarea.estado = estado;

    // Guardar la tarea
    tarea = await Tarea.findByIdAndUpdate({ _id: req.params.id }, nuevaTarea, {
      new: true,
    });
    res.json({ tarea });
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error');
  }
};

exports.eliminarTarea = async (req, res) => {
  try {
    // Extraer el proyecto
    const { proyecto } = req.query;

    // Revisar si la tarea existe
    const tareaExiste = await Tarea.findById(req.params.id);
    if (!tareaExiste) {
      return res.status(404).json({ msg: 'No existe esa tarea' });
    }

    // Revisar si el proyecto pertenece al usuario autenticado
    const existeProyecto = await Proyecto.findById(proyecto);
    if (existeProyecto.creador.toString() !== req.usuario.id) {
      return res.status(401).json({ msg: 'No autorizado' });
    }

    // Eliminar la tarea
    await Tarea.findByIdAndRemove({ _id: req.params.id });
    res.json({ msg: 'Tarea eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error');
  }
};
