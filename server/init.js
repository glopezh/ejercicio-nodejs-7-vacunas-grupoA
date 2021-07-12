const express = require("express");

const app = express();
const morgan =require ("morgan");


/* // Trayendo info del controller

const {
  listarCiudades,
  crearCiudad,
} = require("../db/controllers/Ciudad");


const {
  listarVacunas
} = require("../db/controllers/Vacuna"); */

// Trayendo el info de los schemas - models

const Ciudad = require("../db/models/Ciudad");
const Persona = require("../db/models/Persona");
const PuntoVacunacion = require("../db/models/PuntoVacunacion");
const Vacuna = require("../db/models/Vacuna");

// Settings
app.set('port', process.env.PORT ||3000);

// Middleware - morgan - ver lo que llega al servidor

app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Starting the server npm run dev

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.set('port')}`);
});
// routes

app.get('/', (req, res) => {
  res.send("Hello World");
});



