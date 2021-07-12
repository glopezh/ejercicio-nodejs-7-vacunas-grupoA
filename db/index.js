require("dotenv").config();
const debug = require("debug")("vacunas:db:conexion");
const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      debug(chalk.red("No se ha podido iniciar la base de datos"));
      debug(chalk.red(err.message));
      return;
    }
    console.log("Se ha iniciado la base de datos");
  }
);
