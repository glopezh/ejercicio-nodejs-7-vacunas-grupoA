const inquirer = require("inquirer");
const { getListaCentros, CentrosVacunacion } = require("./funcionesCentro");

const preguntasGenerales = async () => {
  const respuestas = await inquirer.prompt([
    {
      name: "optionGeneral",
      type: "list",
      message: "Eligas una accion",
      choices: [
        {
          value: "vacunaACentro",
          name: "añadir una vacuna a un centro",
        },
        {
          value: "PersonaVacuna",
          name: "añadir una persona vacunada",
        },
        {
          value: "nada",
          name: "no hacer nada",
        },
      ],
    },
  ]);
  if (respuestas.optionGeneral === "nada") {
    process.exit(0);
  } else if (respuestas.optionGeneral === "vacunaACentro") {
    const respuestaCentro = await vacunaAsignadaACentro();
  } else if (respuestas.optionGeneral === "PersonaVacuna") {
    const respuestaPersona = await vacunaAdministradaConfecha();
  }
};
preguntasGenerales();

const vacunaAsignadaACentro = async () => {
  const respuestasVacuna = await inquirer.prompt([
    {
      name: "CentroDeVacunación",
      type: "list",
      message: "Eliga centro de vacunación",
      choices: await getListaCentros(CentrosVacunacion, false),
    },
    // {
    //   name: "ListaDeVacunas",
    //   type: "list",
    //   message: "Eliga una lista de vacunas",
    //   choices: [
    //     // que devuelva un array de las vacunas del centro
    //   ],
    // },
    {
      name: "AnyadirOtraVacuna",
      type: "list",
      message: "Quieres añadir otra vacuna a un centro?",
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
  }
};

const vacunaAdministradaConfecha = async () => {
  const personaVacuna = await vacunaDaministradaSinFecha();
  const fechas = await inquirer.prompt([
    {
      name: "fecha1",
      type: "input",
      message: "introduzca fecha primera dosi",
    },
    {
      name: "fecha2",
      type: "input",
      message: "introduzca fecha segunda dosi",
      // when: funcion que devuelva cuando hay un vacuna de una dosi o de 2 dosis ,
    },
  ]);
};

const vacunaDaministradaSinFecha = async () => {
  const respuestasPersonas = await inquirer.prompt([
    {
      name: "dni",
      type: "input",
      message: "Añade tu DNI",
    },
    {
      name: "CentroDeVacunación",
      type: "list",
      message: "Eliga centro de vacunación",
      choices: await getListaCentros(CentrosVacunacion, true),
    },
  ]);
};
