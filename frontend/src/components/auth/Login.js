import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../Context/alertas/alertaContex';
import AuthContext from '../../Context/autenticacion/authContext';

const Login = (props) => {
  // Context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  // Cuando el usuario no existe o password incorrecto
  useEffect(() => {
    if (autenticado) {
      props.history.push('/proyectos');
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, props.history]);

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
    if (email.trim() === '' || password.trim() === '') {
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
      return;
    }

    // Pasarlo al action
    iniciarSesion({ email, password });
  };

  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
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
