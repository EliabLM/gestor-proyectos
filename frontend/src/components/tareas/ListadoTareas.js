import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
	const tareasProyecto = [
		{ nombre: 'Elegir plataforma', estado: true },
		{ nombre: 'Elegir colores', estado: false },
		{ nombre: 'Elegir plataformas de pago', estado: false },
		{ nombre: 'Elegir hosting', estado: true },
	];

	return (
		<Fragment>
			<h2>Proyecto: Tienda Virtual</h2>
			<ul>
				{tareasProyecto.length === 0 ? (
					<li className="tarea">
						<p>No hay tareas</p>
					</li>
				) : (
					tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
				)}
			</ul>
			<button className="btn btn-eliminar" type="button">
				Eliminar Proyecto &times;
			</button>
		</Fragment>
	);
};

export default ListadoTareas;
