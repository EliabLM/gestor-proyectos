import React, { useContext, useState } from 'react';
import proyectoContext from '../../Context/proyectos/proyectoContext';
import tareaContext from '../../Context/tareas/tareaContext';

const FormTarea = () => {
	// Context
	const proyectosContext = useContext(proyectoContext);
	const { proyecto } = proyectosContext;

	const tareasContext = useContext(tareaContext);
	const { agregarTarea } = tareasContext;

	// State del formulario
	const [tarea, setTarea] = useState({
		nombre: '',
	});

	const { nombre } = tarea;

	// Si no hay proyecto seleccionado
	if (!proyecto) return null;

	// Array destructuring para extraer el proyecto actual
	const [proyectoActual] = proyecto;

	// Leer los valores del formulario
	const handleChange = (e) => {
		setTarea({
			...tarea,
			[e.target.name]: e.targe.value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		// Validar

		// Pasar la validación

		// Agregar la nueva tarea al state de tareas
		tarea.proyectoId = proyectoActual.id;
		tarea.estado = false;
		agregarTarea(tarea);

		// Reiniciar el form
	};

	return (
		<div className="formulario">
			<form onSubmit={handleOnSubmit}>
				<div className="contenedor-input">
					<input
						className="input-text"
						type="text"
						placeholder="Nombre Tarea..."
						name="nombre"
						value={nombre}
						onChange={handleChange}
					/>
				</div>
				<div className="contenedor-input">
					<input
						className="btn btn-primario btn-submit btn-block"
						type="submit"
						value="Agregar Tarea"
					/>
				</div>
			</form>
		</div>
	);
};

export default FormTarea;
