var express = require("express");
var router = express.Router();
/*+-------------------------------------------------------------+
  |                             SITIOS      
  +-------------------------------------------------------------+
*/

const jugadores = require("../api/jugador");

router.get("/jugador/:id", async (req, res) => {
    const jugador = await jugadores.getplayerById(req.params.id);
  
    console.log(Date(jugador.fechanacimineto));
    console.log(jugador.nombre);
   
    res.render("pages/jugador", {
      nombre: jugador.nombre,
      apellido: jugador.apellido,
      fecha: Date(jugador.fechanacimineto),
      documento: jugador.documento,
      genero: jugador.genero,
      imagen: jugador.imagen,
    });
  });


  const canchas = require("../api/cancha");
/* GET users listing. */
router.get("/inscribirme", async function (req, res, next) {
  const llamada = await canchas.getcourts();

  res.render("pages/canchas", { llamada });
});

router.get("/cancha/:id", async (req, res) => {
  const cancha = await canchas.getCourtById(req.params.id);
  res.render("pages/cancha",{cancha} )
});



module.exports = router;