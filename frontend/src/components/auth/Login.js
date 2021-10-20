import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	// State para iniciar sesión
	const [usuario, setUsuario] = useState({
		email: '',
		password: '',
	});

	const { email, password } = usuario;

	const handleOnChange = (e) => {
		setUsuario({
			...usuario,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		// Validar que no haya campos vacios

		// Pasarlo al action
	};

	return (
		<div className="form-usuario">
			<div className="contenedor-form sombra-dark">
				<h1>Iniciar Sesión</h1>
				<form onSubmit={handleOnSubmit}>
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
						<input
							className="btn btn-primario btn-block"
							type="submit"
							value="Iniciar Sesión"
						/>
					</div>
				</form>
				<Link className="enlace-cuenta" to={'/nueva-cuenta'}>
					Crear nueva cuenta
				</Link>
			</div>
		</div>
	);
};

export default Login;
