const { Schema } = require("mongoose");

const arrayLimit = (val) => val.length === 2;

const PuntoVacunacionSchema = new Schema({
  nombre: { type: String, unique: true },
  coordenadas: {
    type: [Number],
    validate: [arrayLimit, "La array debe ser de 2 coordenadas"],
  },
  vacunas: [{ type: Schema.Types.ObjectId, ref: "Vacuna" }],
});

module.exports = PuntoVacunacionSchema;
