const CentrosVacunacion = [
  {
    nombre: "Barcelona",
    puntosVacunacion: [
      {
        nombre: "Sant Isidor- Centre vacunal CAPSBE",
        localizacion: {
          coordenadas: [41.3853035, 2.1274393],
          direccion: "Carrer del Comte Borrell, 305",
        },
        vacunas: [],
      },
      {
        nombre: "Fira de Barcelona",
        localizacion: {
          coordenadas: [41.3726475, 2.1512986],
          direccion: "Avinguda Rius i Taulet, 12",
        },
        vacunas: [],
      },
      {
        nombre: "Facultat de Geografia i Història UB",
        localizacion: {
          coordenadas: [41.3832851, 2.1654357],
          direccion: "Carrer Montalegre, 6",
        },
        vacunas: ["rojo"],
      },
      {
        nombre: "La Maquinista",
        localizacion: {
          coordenadas: [41.4405443, 2.1916226],
          direccion: "Carrer del Pont de Potosí, 2, Planta 0",
        },
        vacunas: [],
      },
    ],
  },
];

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

module.exports = { getListaCentros, CentrosVacunacion };
