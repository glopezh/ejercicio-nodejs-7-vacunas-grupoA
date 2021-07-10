const { listarPersonas, crearPersona } = require("./db/controllers/Persona");
const { listarVacunas } = require("./db/controllers/Vacuna");
const { listarCiudades, crearCiudad } = require("./db/controllers/Ciudad");
const { preguntasGenerales } = require("./inquirer");

require("./db");

preguntasGenerales();

// (async () => {
// Ejemplo creacion Persona
// await crearPersona({
//   dni: "43229678Z",
//   vacuna: "60e828e1a599f53108e81fad",
//   puntoVacunacion: {
//     nombre: "Plaza Espña",
//     localizacion: {
//       coordenadas: [40.0, 50.25],
//       direccion: "no",
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
// })();
