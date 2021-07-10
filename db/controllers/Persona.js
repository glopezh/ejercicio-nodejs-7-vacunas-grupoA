const Persona = require("../models/Persona");

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

module.exports = { listarPersonas, crearPersona };
