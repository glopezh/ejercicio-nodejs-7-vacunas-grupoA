const DosiDosis = [
  {
    nombre: "Pfizer",
    dosis: 2,
  },
  {
    nombre: "Astrazeneca",
    dosis: 2,
  },
  {
    nombre: "Moderna",
    dosis: 2,
  },
  {
    nombre: "Janssen",
    dosis: 1,
  },
];
const getNumeroDosis = (ArrayDosis, numeroVacuna) => {
  let tipoDeVacuna = ArrayDosis[0].DosiDosis;
  if (numeroVacuna) {
    tipoDeVacuna = tipoDeVacuna.filter(
      (DosiDosis) => DosiDosis.dosis[0] !== undefined
    );
  }
  const nombreVacuna = tipoDeVacuna.map((nombre) => {
    const vacunaNombres = {};

    vacunaNombres.name = `${DosiDosis.nombre}`;
    return vacunaNombres;
  });
  if (nombreVacuna[0] === undefined) {
    console.log("No existe esta vacuna");
    process.exit(0);
  }
  return nombreVacuna;
};

module.exports = { getNumeroDosis, DosiDosis };
