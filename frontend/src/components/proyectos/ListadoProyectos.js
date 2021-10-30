import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../Context/proyectos/proyectoContext';
import AlertaContext from '../../Context/alertas/alertaContex';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListadoProyectos = () => {
  // Extraer proyectos desde el context
  const proyectosContext = useContext(proyectoContext);
  const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  // obtener proyectos cuando caarga el componente
  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }

    obtenerProyectos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mensaje]);

  // Validar si proyectos esta vacio
  if (proyectos.length === 0) return <p>No hay proyectos, agrega uno.</p>;

  return (
    <ul className="listado-proyectos">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}

      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition classNames="proyecto" key={proyecto._id} timeout={200}>
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
