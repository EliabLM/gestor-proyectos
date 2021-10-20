import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
	// State para iniciar sesión
	const [usuario, setUsuario] = useState({
		nombre: '',
		email: '',
		password: '',
		confirmar: '',
	});

	const { nombre, email, password, confirmar } = usuario;

	const handleOnChange = (e) => {
		setUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		// Validar que no haya campos vacios

		// Password minimo de 6 caracteres

		// Validar que los dos password coincidan

		// Pasarlo al action
	};

	return (
		<div className="form-usuario">
			<div className="contenedor-form sombra-dark">
				<h1>Crear Cuenta</h1>

				<form onSubmit={handleOnSubmit}>
					<div className="campo-form">
						<label htmlFor="nombre">Nombre</label>
						<input
							type="text"
							id="nombre"
							name="nombre"
							placeholder="Nombre"
							value={nombre}
							onChange={handleOnChange}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="email@email.com"
							value={email}
							onChange={handleOnChange}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="password"
							value={password}
							onChange={handleOnChange}
						/>
					</div>

					<div className="campo-form">
						<label htmlFor="confirmar">Confirmar password</label>
						<input
							type="password"
							id="confirmar"
							name="confirmar"
							placeholder="Ingresar nuevamente tu password"
							value={confirmar}
							onChange={handleOnChange}
						/>
					</div>

					<div className="campo-form">
						<input
							className="btn btn-primario btn-block"
							type="submit"
							value="Registrarme"
						/>
					</div>
				</form>

				<Link className="enlace-cuenta" to={'/'}>
					Iniciar Sesión
				</Link>
			</div>
		</div>
	);
};

export default NuevaCuenta;
