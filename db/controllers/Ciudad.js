const { Ciudad } = require("../models/Ciudad");
const { personasVacunadasEnCiudad } = require("./Persona");
const { listarVacunas } = require("./Vacuna");

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

const dosisEnCiudad = async (idCiudad) => {
  const personas = await personasVacunadasEnCiudad(idCiudad, "vacuna");
  const vacunas = await listarVacunas();

  const vacunasFormateadas = vacunas.map((vacuna) => {
    const vacunaToReturn = {};

    vacunaToReturn.nombre = vacuna.nombre;
    vacunaToReturn.dosisAdministradas = personas.reduce(
      (acumulador, valorActual) => {
        if (valorActual.vacuna.id === vacuna.id) {
          return acumulador + valorActual.dosis.length;
        }
        return acumulador;
      },
      0
    );
    return vacunaToReturn;
  });

  return vacunasFormateadas;
};

module.exports = { listarCiudades, crearCiudad, dosisEnCiudad };
