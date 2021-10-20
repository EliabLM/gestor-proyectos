import React from 'react';

const Login = () => {
	return (
		<div className="form-usuario">
			<div className="contenedor-form sombra-dark">
				<h1>Iniciar Sesión</h1>
				<form>
					<div className="campo-form">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="email@email.com"
							onChange={(e) => console.log(e.target.value)}
						/>
					</div>
					<div className="campo-form">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="password"
							onChange={(e) => console.log(e.target.value)}
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
			</div>
		</div>
	);
};

export default Login;
