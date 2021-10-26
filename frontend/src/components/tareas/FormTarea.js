import React, { useContext } from 'react';
import proyectoContext from '../../Context/proyectos/proyectoContext';

const FormTarea = () => {
	const proyectosContext = useContext(proyectoContext);
	const { proyecto } = proyectosContext;

	// Si no hay proyecto seleccionado
	if (!proyecto) return null;

	// Array destructuring para extraer el proyecto actual
	const [proyectoActual] = proyecto;

	return (
		<div className="formulario">
			<form>
				<div className="contenedor-input">
					<input
						className="input-text"
						type="text"
						placeholder="Nombre Tarea..."
						name="nombre"
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
