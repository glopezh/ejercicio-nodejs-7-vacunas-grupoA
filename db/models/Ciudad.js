const { Schema, model } = require("mongoose");
const { PuntoVacunacionSchema } = require("./PuntoVacunacion");

const CiudadSchema = new Schema({
  nombre: String,
  puntosVacunacion: [PuntoVacunacionSchema],
});

const Ciudad = model("Ciudad", CiudadSchema, "Ciudad");

module.exports = { Ciudad };
