const inquirer = require ("inquirer");
const preguntasGenerales = async () =>{
    const respuestas = await inquirer.prompt([
        {
            name: "optionGeneral",
            type: "list",
            message: "Eligas una accion", 
            choices: [
                {
                    value: "Vacuna",
                    name: "añadir una vacuna a un centro"

                },
                {
                    value: "PersonaVacuna",
                    name: "añadir una persona vacunada"
                }
            ] 
        }
    ])
}
preguntasGenerales();
const vacunaIntroducida = async() => {
    const respuestasVacuna = await inquirer.prompt([
        {
            name: "CentroDeVacunación",
            type: "list",
            message: "Eliga centro de vacunación",
            choices: [
                //añadir array de los centros 
            ]
        },
        {
            name: "ListaDeVacunas",
            type: "list",
            message: "Eliga una lista de vacunas",
            choices: [
                //que devuelva un array de las vacunas del centro
            ]
        },
        {
            name: "AnyadirOtraVacuna",
            type: "list",
            message: "Eliga otra vacuna",
            choices: [
            {
                value: "si",
                name: "si",
            },
            {
                value: "no",
                name: "no",
            }
            ]
        }
    ])
}
const fechaDeVacunacion = async() =>{
    const personaVacuna = await agregarPersonaVacunada();
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
            //when: funcion que devuelva cuando hay un vacuna de una dosi o de 2 dosis ,
        },
    ]
    )}
// const agregarPersonaVacunada = async() => {
//     const respuestasPersonas = await inquirer.prompt([
//         {
//             name: "dni",
//             type: "input",
//             message: "Añade tu DNI",
//         },
//         {
//             name: "CentroDeVacunación",
//             type: "list",
//             message: "Eliga centro de vacunación",
//             choices: [
//                 //añadir funcion que devuelva array de los centros  
//             ]
//         },
//         {
//             name: "AnyadirFecha",
//             type: "input",
//             message: "Añade la fecha de vacunación",
//         },

//     ]),
// },