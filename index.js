const { listarPersonas, crearPersona } = require("./db/controllers/Persona");
const { listarVacunas } = require("./db/controllers/Vacuna");
const { listarCiudades, crearCiudad } = require("./db/controllers/Ciudad");
require("./db");

(async () => {
  // Ejemplo creacion Persona
  // await crearPersona({
  //   dni: "43228678Z",
  //   vacuna: "60e828e1a599f53108e81fad",
  //   puntoVacunacion: {
  //     nombre: "Plaza España",
  //     localizacion: {
  //       coordenadas: [40.0, 50.25],
  //       direccion: "La calle mas chula de mallorca",
  //     },
  //     vacunas: [],
  //   },
  //   dosis: [new Date(Date.parse("Aug 9, 1995")), new Date()],
  // });
  // await listarPersonas();
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
  //
  // await listarCiudades();
})();
