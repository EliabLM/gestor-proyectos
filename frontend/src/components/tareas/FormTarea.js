import React from 'react';

const FormTarea = () => {
	return (
		<div className="formulario">
			<form>
				<div className="contenedor-input">
					<input
						className="input-text"
						type="text"
						placeholder="Nombre Tarea..."
						name="nombre"
					/>
				</div>
				<div className="contenedor-input">
					<input
						className="btn btn-primario btn-submit btn-block"
						type="submit"
						value="Agregar Tarea"
					/>
				</div>
			</form>
		</div>
	);
};

export default FormTarea;
