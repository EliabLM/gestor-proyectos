import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../Context/proyectos/proyectoContext';

const ListadoTareas = () => {
	const proyectosContext = useContext(proyectoContext);
	const { proyecto, eliminarProyecto } = proyectosContext;

	// Si no hay proyecto seleccionado
	if (!proyecto) return <h2>Selecciona un proyecto</h2>;

	// Array destructuring para extraer el proyecto actual
	const [proyectoActual] = proyecto;

	const tareasProyecto = [
		{ nombre: 'Elegir plataforma', estado: true },
		{ nombre: 'Elegir colores', estado: false },
		{ nombre: 'Elegir plataformas de pago', estado: false },
		{ nombre: 'Elegir hosting', estado: true },
	];

	return (
		<Fragment>
			<h2>Proyecto: {proyectoActual.nombre}</h2>
			<ul>
				{tareasProyecto.length === 0 ? (
					<li className="tarea">
						<p>No hay tareas</p>
					</li>
				) : (
					tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
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
