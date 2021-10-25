import React, { Fragment, useState, useContext } from 'react';
import proyectoContex from '../../Context/proyectos/proyectoContext';

const NuevoProyecto = () => {
	// Obtener el state del formulario
	const proyectosContext = useContext(proyectoContex);
	const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;

	// State para proyecto
	const [proyecto, setProyecto] = useState({
		nombre: '',
	});

	const { nombre } = proyecto;

	// Lee los contenidos del input
	const handleOnChangeProyecto = (e) => {
		setProyecto({
			...proyecto,
			[e.target.name]: e.target.value,
		});
	};

	// Envia un proyecto
	const handleOnSubmitProyecto = (e) => {
		e.preventDefault();

		// Validar el proyecto
		if (nombre === '') {
			return;
		}

		//  Agregar al state
		agregarProyecto(proyecto);

		// Reiniciar el form
		setProyecto({ nombre: '' });
	};

	return (
		<Fragment>
			<button
				className="btn btn-block btn-primario"
				type="button"
				onClick={() => mostrarFormulario()}
			>
				Nuevo Proyecto
			</button>
			{formulario ? (
				<form
					className="formulario-nuevo-proyecto"
					onSubmit={handleOnSubmitProyecto}
				>
					<input
						className="input-text"
						placeholder="Nombre Proyecto"
						name="nombre"
						type="text"
						value={nombre}
						onChange={handleOnChangeProyecto}
					/>
					<input
						className="btn btn-primario btn-block"
						type="submit"
						value="Agregar Proyecto"
					/>
				</form>
			) : null}
		</Fragment>
	);
};

export default NuevoProyecto;
