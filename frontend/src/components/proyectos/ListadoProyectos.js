import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../Context/proyectos/proyectoContext';

const ListadoProyectos = () => {
	// Extraer proyectos desde el context
	const proyectosContext = useContext(proyectoContext);
	const { proyectos, obtenerProyectos } = proyectosContext;

	// obtener proyectos cuando caarga el componente
	useEffect(() => {
		obtenerProyectos();
	}, []);

	// Validar si proyectos esta vacio
	if (proyectos.length === 0) return null;

	return (
		<ul className="listado-proyectos">
			{proyectos.map((proyecto) => (
				<Proyecto key={proyecto.id} proyecto={proyecto} />
			))}
		</ul>
	);
};

export default ListadoProyectos;
