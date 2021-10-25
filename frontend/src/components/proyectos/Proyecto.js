import React, { useContext } from 'react';
import proyectoContext from '../../Context/proyectos/proyectoContext';

const Proyecto = ({ proyecto }) => {
	const proyectosContext = useContext(proyectoContext);
	const { proyectoActual } = proyectosContext;

	return (
		<li>
			<button
				className="btn btn-blank"
				type="button"
				onClick={() => proyectoActual(proyecto.id)}
			>
				{proyecto.nombre}
			</button>
		</li>
	);
};

export default Proyecto;
