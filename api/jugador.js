const db = require("../models");

const getplayers = async () => {
  const jugadores = await db.jugador
    .findAll({ include: db.cancha })
    .then((resultados) => {
      return resultados;
    });
  return jugadores;
};

const getplayerById = async (id) => {
  const infoJugador = await db.jugador.findByPk(id).then((resultado) => {
    return resultado;
  });

  return infoJugador;
};

const createplayer = async (
  nombre,
  apellido,
  fechanacimiento,
  documento,
  genero,
  imagen,
  canchaId
) => {
  const nuevojugador = await db.jugador.create({
    nombre,
    apellido,
    fechanacimiento,
    documento,
    genero,
    imagen,
    canchaId,
  });
  return nuevojugador;
};

module.exports = {
  getplayers,
  getplayerById,
  createplayer,
};
