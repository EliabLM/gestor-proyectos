import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
	TAREAS_PROYECTO,
	AGREGAR_TAREA,
	VALIDAR_TAREA,
	ELIMINAR_TAREA,
	ESTADO_TAREA,
} from '../../types';

const TareaState = (props) => {
	const initialState = {
		tareas: [
			{ id: 1, nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
			{ id: 2, nombre: 'Elegir colores', estado: false, proyectoId: 2 },
			{
				id: 3,
				nombre: 'Elegir plataformas de pago',
				estado: false,
				proyectoId: 3,
			},
			{ id: 4, nombre: 'Elegir hosting', estado: true, proyectoId: 2 },
			{ id: 5, nombre: 'plataforma', estado: true, proyectoId: 1 },
			{ id: 6, nombre: 'colores', estado: false, proyectoId: 2 },
			{ id: 7, nombre: 'plataformas de pago', estado: false, proyectoId: 3 },
			{ id: 8, nombre: 'hosting', estado: true, proyectoId: 2 },
			{ id: 9, nombre: 'Elegir hosting 2', estado: true, proyectoId: 1 },
			{ id: 10, nombre: 'Elegir plataforma 2', estado: true, proyectoId: 2 },
			{ id: 11, nombre: 'Elegir colores 2', estado: false, proyectoId: 3 },
			{
				id: 12,
				nombre: 'Elegir plataformas de pago 2',
				estado: false,
				proyectoId: 1,
			},
			{ id: 13, nombre: 'Elegir hosting 3', estado: true, proyectoId: 2 },
		],
		tareasproyecto: null,
		errortarea: false,
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

	// Valida y muestra un error en caso de que sea necesario
	const validarTarea = () => {
		dispatch({
			type: VALIDAR_TAREA,
		});
	};

	// Eliminar tarea por id
	const eliminarTarea = (id) => {
		dispatch({
			type: ELIMINAR_TAREA,
			payload: id,
		});
	};

	// Cambia el estado de cada tarea
	const cambiarEstadoTarea = (tarea) => {
		dispatch({
			type: ESTADO_TAREA,
			payload: tarea,
		});
	};

	return (
		<TareaContext.Provider
			value={{
				tareas: state.tareas,
				tareasproyecto: state.tareasproyecto,
				errortarea: state.errortarea,
				obtenerTareas,
				agregarTarea,
				validarTarea,
				eliminarTarea,
				cambiarEstadoTarea,
			}}
		>
			{props.children}
		</TareaContext.Provider>
	);
};

export default TareaState;
