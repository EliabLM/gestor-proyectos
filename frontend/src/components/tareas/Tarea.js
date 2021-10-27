import React, { useContext } from 'react';
import proyectoContext from '../../Context/proyectos/proyectoContext';
import tareaContext from '../../Context/tareas/tareaContext';

const Tarea = ({ tarea }) => {
	// Context
	const proyectosContext = useContext(proyectoContext);
	const { proyecto } = proyectosContext;

	const [proyectoAtual] = proyecto;

	const tareasContext = useContext(tareaContext);
	const { eliminarTarea, obtenerTareas } = tareasContext;

	// Funcion para eliminar tarea
	const tareaEliminar = (id) => {
		eliminarTarea(id);
		obtenerTareas(proyectoAtual.id);
	};

	return (
		<li className="tarea sombra">
			<p>{tarea.nombre}</p>
			<div className="estado">
				{tarea.estado ? (
					<button className="completo" type="button">
						Completo
					</button>
				) : (
					<button className="incompleto" type="button">
						Incompleto
					</button>
				)}
			</div>
			<div className="acciones">
				<button className="btn btn-primario" type="button">
					Editar
				</button>
				<button
					className="btn btn-secundario"
					type="button"
					onClick={() => tareaEliminar(tarea.id)}
				>
					Eliminar
				</button>
			</div>
		</li>
	);
};

export default Tarea;
