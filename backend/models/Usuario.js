const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		trim: true, // Elimina los espacios al inicio y al final
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
	registro: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model('Usuario', UsuariosSchema);
