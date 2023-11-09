const mongoose = require("mongoose");

const jugadorSchema = require('./Jugador')

const Jugador = mongoose.model("Jugador", jugadorSchema);

module.exports = { Jugador };

