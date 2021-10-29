import React, { useReducer } from 'react';
import alertaReducer from './alertaReducer';
import alertaContex from './alertaContex';

import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

const AlertaState = (props) => {
	const initialState = {
		alerta: null,
	};

	const [state, dispatch] = useReducer(alertaReducer, initialState);

	const mostrarAlerta = (msg, categoria) => {
		dispatch({
			type: MOSTRAR_ALERTA,
			payload: {
				msg,
				categoria,
			},
		});

		setTimeout(() => {
			dispatch({
				type: OCULTAR_ALERTA,
			});
		}, 5000);
	};

	return (
		<alertaContex.Provider value={{ alerta: state.alerta, mostrarAlerta }}>
			{props.children}
		</alertaContex.Provider>
	);
};

export default AlertaState;
