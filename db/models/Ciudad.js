const { Schema, model } = require("mongoose");
const puntoVacunacion = require("./PuntoVacunacion");

const CiudadSchema = new Schema({
  nombre: String,
  puntosVacunacion: [puntoVacunacion],
});

const Ciudad = model("Ciudad", CiudadSchema, "Ciudad");

module.exports = { Ciudad };
