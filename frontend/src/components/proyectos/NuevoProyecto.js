import React, { Fragment } from 'react';

const NuevoProyecto = () => {
	return (
		<Fragment>
			<button className="btn btn-block btn-primario" type="button">
				Nuevo Proyecto
			</button>
			<form className="formulario-nuevo-proyecto">
				<input
					className="input-text"
					placeholder="Nombre Proyecto"
					name="nombre"
					type="text"
				/>
				<input
					className="btn btn-primario btn-block"
					type="submit"
					value="Agregar Proyecto"
				/>
			</form>
		</Fragment>
	);
};

export default NuevoProyecto;
