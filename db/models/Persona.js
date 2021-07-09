const { Schema, model } = require("mongoose");
const puntoVacunacion = require("./PuntoVacunacion");

const arrayLimit = (val) => val.length <= 2 && val.length >= 0;

const PersonaSchema = new Schema({
  dni: {
    type: String,
    unique: true,
    maxLength: 9,
  },
  vacuna: {
    type: Schema.Types.ObjectId,
    ref: "Vacuna",
  },
  puntoVacunacion,
  dosis: {
    type: [Date],
    validate: [arrayLimit, "La array debe ser de entre 2 y 0 dosis"],
  },
});

const Persona = model("Persona", PersonaSchema, "Persona");

module.exports = Persona;
