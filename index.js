const { listarPersonas } = require("./db/controllers/Persona");
const { listarVacunas } = require("./db/controllers/Vacuna");
const { listarCiudades, crearCiudad } = require("./db/controllers/Ciudad");
require("./db");

(async () => {
  // listarPersonas();
  // listarVacunas();

  // Ejemplo creacion ciudad
  // const ciudadNueva = {
  //   nombre: "Palma",
  //   puntosVacunacion: [
  //     {
  //       nombre: "Plaza España",
  //       localizacion: {
  //         coordenadas: [40.0, 50.25],
  //         direccion: "La calle mas chula de mallorca",
  //       },
  //       vacunas: [],
  //     },
  //   ],
  // };
  // await crearCiudad(ciudadNueva);

  await listarCiudades();
})();
