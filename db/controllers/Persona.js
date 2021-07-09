const Persona = require("../models/Persona");

const listarPersonas = async () => {
  const persona = await Persona.find();

  console.log(persona);

  return persona;
};

module.exports = { listarPersonas };
