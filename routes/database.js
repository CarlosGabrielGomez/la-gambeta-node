var express = require("express");
var router = express.Router();

/*+-------------------------------------------------------------+
  |                             APIS                            |
  +-------------------------------------------------------------+
*/

/* GET users listing. */

const jugadores = require("../api/jugador");

router.get("/jugadores", async function (req, res, next) {
  const llamada = await jugadores.getplayers();
  res.send(llamada);
});

router.get("/jugador/:id", async (req, res) => {
  const jugador = await jugadores.getplayerById(req.params.id);
  res.send(jugador);
});

/* POST users listing. */




const canchas = require("../api/cancha");
/* GET users listing. */
router.get("/canchas", async function (req, res, next) {
  const llamada = await canchas.getcourts();
  res.send(llamada);
});

router.get("/cancha/:id", async (req, res) => {
  const cancha = await canchas.getCourtById(req.params.id);
  res.send(cancha);
});



/* POST users listing. */

module.exports = router;
