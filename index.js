const { listarPersonas } = require("./db/controllers/Persona");
require("./db");

(async () => {
  listarPersonas();
})();
