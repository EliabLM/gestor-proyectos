import React, { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../Context/autenticacion/authContext';

const RutaPrivada = ({ component: Component, ...props }) => {
  const authContext = useContext(AuthContext);
  const { autenticado } = authContext;

  return (
    <Route
      {...props}
      render={(props) =>
        !autenticado ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default RutaPrivada;
