const express = require ('express');

const router = express.Router();

const {
  listarPersonas,
  crearPersona,
} = require("../db/controllers/Persona");

module.exports = router;
