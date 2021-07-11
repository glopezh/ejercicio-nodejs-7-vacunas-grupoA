const inquirer = require("inquirer");
const {
  getListaCentros,
  getNumeroDosis,
  getVacunasEnCentro,
  getTodasVacunas,
} = require("./funcionesInquirer");
const { listarCiudades } = require("./db/controllers/Ciudad");
const { listarVacunas } = require("./db/controllers/Vacuna");

const preguntasGenerales = async () => {
  const respuestas = await inquirer.prompt([
    {
      name: "optionGeneral",
      type: "list",
      message: "¿Qué quieres hacer?",
      choices: [
        {
          value: "vacunaACentro",
          name: "Añadir una vacuna a un centro",
        },
        {
          value: "PersonaVacuna",
          name: "Añadir una persona vacunada",
        },
        {
          value: "nada",
          name: "No hacer nada",
        },
      ],
    },
  ]);
  if (respuestas.optionGeneral === "nada") {
    console.log("¿Y para que has ejecutado el programa, si no haces nada?");
    process.exit(0);
  } else if (respuestas.optionGeneral === "vacunaACentro") {
    const respuestaCentro = await vacunaAsignadaACentro();
  } else if (respuestas.optionGeneral === "PersonaVacuna") {
    const respuestaPersona = await vacunaAdministradaConfecha();
  }
};

const vacunaAsignadaACentro = async () => {
  const respuestasVacuna = await inquirer.prompt([
    {
      name: "CentroDeVacunación",
      type: "list",
      message: "Elija centro de vacunación para añadir una vacuna",
      choices: getListaCentros(await listarCiudades(), false),
    },
    {
      name: "opcionVacunasEnEdificios",
      type: "list",
      message: "¿Que vacuna quieres añadir al centro?",
      choices: getTodasVacunas(await listarVacunas()),
    },
    {
      name: "AnyadirOtraVacuna",
      type: "list",
      message: "Quieres añadir otra vacuna a otro centro?",
      choices: [
        {
          value: "si",
          name: "si",
        },
        {
          value: "no",
          name: "no",
        },
      ],
    },
  ]);
  if (respuestasVacuna.AnyadirOtraVacuna === "si") {
    const volverALlamarFuncion = await vacunaAsignadaACentro();
  } else if (respuestasVacuna.AnyadirOtraVacuna === "no") {
    console.log("Saliendo del programa... bip bop...");
    process.exit(0);
  }
};

const vacunaAdministradaConfecha = async () => {
  const vacunaColocada = await vacunaPuesta();
  const fechas = await inquirer.prompt([
    {
      name: "fecha1",
      type: "input",
      message: `introduzca la fecha de la primera dosi de ${vacunaColocada.VacunaPuesta}`,
    },
    {
      name: "fecha2",
      type: "input",
      message: `introduzca la fecha de la segunda dosi de ${vacunaColocada.VacunaPuesta}`,
      when:
        getNumeroDosis(await listarVacunas(), vacunaColocada.VacunaPuesta) ===
        2,
    },
    {
      name: "nuevaPersona",
      message: "Quieres añadir a otra persona?",
      type: "list",
      choices: [
        {
          value: "si",
          name: "si",
        },
        {
          value: "no",
          name: "no",
        },
      ],
    },
  ]);
  if (fechas.nuevaPersona === "si") {
    const nuevaPersona = await vacunaAdministradaConfecha();
  } else {
    console.log(
      "Gracias por colaborar con el departamento de salud del gobierno de Macedonia"
    );
    process.exit(0);
  }
};

const vacunaPuesta = async () => {
  const personaVacuna = await vacunaDaministradaSinFecha();
  const respuestas = await inquirer.prompt([
    {
      name: "VacunaPuesta",
      type: "list",
      message: `¿Qué vacuna le han puesto a la persona con DNI ${personaVacuna.dni}?`,
      choices: getVacunasEnCentro(
        await listarCiudades(),
        personaVacuna.CentroDeVacunación
      ),
    },
  ]);
  return respuestas;
};

const vacunaDaministradaSinFecha = async () => {
  const respuestasPersonas = await inquirer.prompt([
    {
      name: "dni",
      type: "input",
      message: "Añade el DNI de la persona vacunada",
    },
    {
      name: "CentroDeVacunación",
      type: "list",
      message: "Eliga centro donde le han vacunado a la persona",
      choices: await getListaCentros(await listarCiudades(), true),
    },
  ]);
  return respuestasPersonas;
};
module.exports = { preguntasGenerales };
