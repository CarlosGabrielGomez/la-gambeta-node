const db = require("../models");

const getcourts = async () => {
  const canchas = await db.cancha.findAll().then((resultados) => {
    return resultados;
  });
  return canchas;
};

const getCourtById = async (id) => {
  const infoCancha = await db.cancha.findByPk(id).then((resultado) => {
    return resultado;
  });

  return infoCancha;
};

const createcourt = async (nombre, direccion, partido, localidad, imagen) => {
  const nuevacancha = await db.cancha.create({
    nombre,
    direccion,
    partido,
    localidad,
    imagen,
  });
  return nuevacancha;
};

module.exports = {
  getcourts,
  getCourtById,
  createcourt
};
