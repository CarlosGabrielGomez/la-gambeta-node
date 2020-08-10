const db = require("../models");

const getcourts = async () => {
  const canchas = await db.cancha.findAll().then(resultados => {
    return resultados;
  });
  return canchas;
}

const getCourtById = async (id) => {
  const infoCancha = await db.cancha.findByPk(id)
            .then(resultado => {
               return resultado;
              });

  return infoCancha;
}

module.exports = {
  getcourts,
  getCourtById
}
