const { Ciudad } = require("../models/Ciudad");

const listarCiudades = async () => {
  const ciudades = await Ciudad.find();

  // console.log(ciudades);

  return ciudades;
};

const crearCiudad = async (ciudad) => {
  try {
    const newCiudad = await Ciudad.create(ciudad);
    return newCiudad;
  } catch (err) {
    console.log("Error al crear la ciudad", err.message);
  }
};

module.exports = { listarCiudades, crearCiudad };
