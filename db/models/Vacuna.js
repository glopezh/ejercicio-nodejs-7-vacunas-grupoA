const { Schema, model } = require("mongoose");

const VacunaSchema = new Schema({
  nombre: { type: String, unique: true },
  dosis: Number,
});

const Vacuna = model("Vacuna", VacunaSchema, "Vacuna");

module.exports = { Vacuna };
