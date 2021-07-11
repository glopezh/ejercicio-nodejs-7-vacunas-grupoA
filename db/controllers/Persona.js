const Persona = require("../models/Persona");
const { Ciudad } = require("../models/Ciudad");
const { PuntoVacunacion } = require("../models/PuntoVacunacion");

const listarPersonas = async () => {
  const persona = await Persona.find();

  console.log(persona);

  return persona;
};

const crearPersona = async (persona) => {
  try {
    const newPersona = await Persona.create(persona);
    return newPersona;
  } catch (err) {
    console.log("Error al crear la persona", err.message);
  }
};

const personasVacunadasEnCiudad = async (idCiudad, rellenar = "") => {
  const ciudad = await Ciudad.findById(idCiudad);

  const idPuntosVacunacion = ciudad.puntosVacunacion.map((punto) => punto._id);

  const personas = await Persona.find({
    puntoVacunacion: { $in: [...idPuntosVacunacion] },
  }).populate(rellenar);

  return personas;
};

module.exports = { listarPersonas, crearPersona, personasVacunadasEnCiudad };
