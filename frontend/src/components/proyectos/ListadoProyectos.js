import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../Context/proyectos/proyectoContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListadoProyectos = () => {
  // Extraer proyectos desde el context
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  // obtener proyectos cuando caarga el componente
  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Validar si proyectos esta vacio
  if (proyectos.length === 0) return <p>No hay proyectos, agrega uno.</p>;

  return (
    <ul className="listado-proyectos">
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
