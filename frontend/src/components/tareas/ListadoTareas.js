import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../Context/proyectos/proyectoContext';
import tareaContext from '../../Context/tareas/tareaContext';

const ListadoTareas = () => {
	// Context
	const proyectosContext = useContext(proyectoContext);
	const { proyecto, eliminarProyecto } = proyectosContext;

	const tareasContext = useContext(tareaContext);
	const { tareasproyecto } = tareasContext;

	// Si no hay proyecto seleccionado
	if (!proyecto) return <h2>Selecciona un proyecto</h2>;

	// Array destructuring para extraer el proyecto actual
	const [proyectoActual] = proyecto;

	return (
		<Fragment>
			<h2>Proyecto: {proyectoActual.nombre}</h2>
			<ul>
				{tareasproyecto.length === 0 ? (
					<li className="tarea">
						<p>No hay tareas</p>
					</li>
				) : (
					tareasproyecto.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)
				)}
			</ul>
			<button
				className="btn btn-eliminar"
				type="button"
				onClick={() => eliminarProyecto(proyectoActual.id)}
			>
				Eliminar Proyecto &times;
			</button>
		</Fragment>
	);
};

export default ListadoTareas;
