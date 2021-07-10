const { listarCiudades } = require("./db/controllers/Ciudad");

const getListaCentros = (ArrayCentros, boolanParafiltrarPorVacunas) => {
  let centrosConVacunas = ArrayCentros[0].puntosVacunacion;
  if (boolanParafiltrarPorVacunas) {
    centrosConVacunas = centrosConVacunas.filter(
      (centrowVacuna) => centrowVacuna.vacunas[0] !== undefined
    );
  }
  const listaCentros = centrosConVacunas.map((centro) => {
    const listaNombres = {};

    listaNombres.value = `${centro.nombre}`;
    listaNombres.name = `${centro.nombre}`;
    return listaNombres;
  });
  if (listaCentros[0] === undefined && boolanParafiltrarPorVacunas) {
    console.log("No hay nigún centro que tenga vacunas");
    process.exit(0);
  }
  return listaCentros;
};

module.exports = { getListaCentros };
