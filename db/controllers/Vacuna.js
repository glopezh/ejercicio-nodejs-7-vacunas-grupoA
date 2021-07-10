const { Vacuna } = require("../models/Vacuna");

const listarVacunas = async () => {
  const vacunas = await Vacuna.find();

  console.log(vacunas);

  return vacunas;
};

module.exports = { listarVacunas };
