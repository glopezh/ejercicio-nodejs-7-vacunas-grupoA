const { Schema, model } = require("mongoose");

const VacunaSchema = new Schema({
  nombre: { type: String, unique: true },
  dosis: Number,
});

// Esquema y conexión correspondiente

const Vacuna = model("Vacuna", VacunaSchema, "Vacuna");

module.exports = { Vacuna };
