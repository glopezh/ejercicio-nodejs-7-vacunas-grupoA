const express = require ('express');

const router = express.Router();

const {
  listarPersonas,
  crearPersona,
} = require("../../db/controllers/Persona");

// Devuelve informacion las personas
router.get("/personas:dni", (req, res, next) => {
  const {dni} = req.params;
});

module.exports = router;
