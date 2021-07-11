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

const getTodasVacunas = (listadeVacunas) => {
  const newList = listadeVacunas.map((elemento) => {
    const ArrayVacunas = {};
    ArrayVacunas.value = `${elemento.nombre}`;
    ArrayVacunas.name = `${elemento.nombre}`;
    return ArrayVacunas;
  });
  return newList;
};

const getNumeroDosis = (ArrayDosis, nombreVacuna) => {
  const datosFiltrados = ArrayDosis.filter(
    (elemento) => elemento.nombre === nombreVacuna
  );
  return datosFiltrados[0].dosis;
};

const getVacunasEnCentro = (ArrayCentros, Centro) => {
  const centroEspecificoVacunacion = ArrayCentros[0].puntosVacunacion.filter(
    (elemento) => elemento.nombre === Centro
  );

  const vacunasCentro = centroEspecificoVacunacion[0].vacunas.map(
    (elemento) => {
      const arrayVacunas = {};

      arrayVacunas.name = `${elemento}`;
      arrayVacunas.value = `${elemento}`;
      return arrayVacunas;
    }
  );
  return vacunasCentro;
};

module.exports = {
  getListaCentros,
  getNumeroDosis,
  getVacunasEnCentro,
  getTodasVacunas,
};
