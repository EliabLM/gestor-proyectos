import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { TAREAS_PROYECTO, AGREGAR_TAREA } from '../../types';

const TareaState = (props) => {
	const initialState = {
		tareas: [
			{ nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
			{ nombre: 'Elegir colores', estado: false, proyectoId: 2 },
			{ nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 3 },
			{ nombre: 'Elegir hosting', estado: true, proyectoId: 2 },
			{ nombre: 'plataforma', estado: true, proyectoId: 1 },
			{ nombre: 'colores', estado: false, proyectoId: 2 },
			{ nombre: 'plataformas de pago', estado: false, proyectoId: 3 },
			{ nombre: 'hosting', estado: true, proyectoId: 2 },
			{ nombre: 'Elegir hosting 2', estado: true, proyectoId: 1 },
			{ nombre: 'Elegir plataforma 2', estado: true, proyectoId: 2 },
			{ nombre: 'Elegir colores 2', estado: false, proyectoId: 3 },
			{ nombre: 'Elegir plataformas de pago 2', estado: false, proyectoId: 1 },
			{ nombre: 'Elegir hosting 3', estado: true, proyectoId: 2 },
		],
		tareasproyecto: null,
	};

	// Crear dispatch y state
	const [state, dispatch] = useReducer(TareaReducer, initialState);

	// Obtener las tareas de un proyecto
	const obtenerTareas = (proyectoId) => {
		dispatch({
			type: TAREAS_PROYECTO,
			payload: proyectoId,
		});
	};

	// Agregar tarea al proyecto seleccionado
	const agregarTarea = (tarea) => {
		dispatch({
			type: AGREGAR_TAREA,
			payload: tarea,
		});
	};

	return (
		<TareaContext.Provider
			value={{
				tareas: state.tareas,
				tareasproyecto: state.tareasproyecto,
				obtenerTareas,
				agregarTarea,
			}}
		>
			{props.children}
		</TareaContext.Provider>
	);
};

export default TareaState;
