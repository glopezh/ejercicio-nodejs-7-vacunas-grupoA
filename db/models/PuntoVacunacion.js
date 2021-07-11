const { Schema, model } = require("mongoose");

const arrayLimit = (val) => val.length === 2;

const PuntoVacunacionSchema = new Schema({
  nombre: { type: String, unique: true },
  localizacion: {
    coordenadas: {
      type: [Number],
      validate: [arrayLimit, "La array debe ser de 2 coordenadas"],
    },
    direccion: String,
  },
  vacunas: [{ type: Schema.Types.ObjectId, ref: "Vacuna" }],
});

const PuntoVacunacion = model(
  "PuntoVacunacion",
  PuntoVacunacionSchema,
  "PuntoVacunacion"
);

module.exports = { PuntoVacunacionSchema, PuntoVacunacion };
