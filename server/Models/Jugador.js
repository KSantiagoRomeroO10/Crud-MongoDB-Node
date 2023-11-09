const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jugadorSchema = new Schema({
  nombre: { type: String, required: true },
  numero_camisa: { type: Number, required: true },
  posicion: { type: String, required: true },
  equipo: { type: String, required: true },
  fecha_inicio_contrato: { type: Date, required: true },
  fecha_fin_contrato: { type: Date, required: true }
});

module.exports = jugadorSchema;
