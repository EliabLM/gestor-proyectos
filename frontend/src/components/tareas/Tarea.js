import React from 'react';

const Tarea = ({ tarea }) => {
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
				<button className="btn btn-secundario" type="button">
					Eliminar
				</button>
			</div>
		</li>
	);
};

export default Tarea;
