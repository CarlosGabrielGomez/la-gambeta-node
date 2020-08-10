var express = require("express");
var router = express.Router();

//solicitamos nestras funciones de DB

const jugadores = require("../api/jugador");
/* GET users listing. */
router.get("/jugadores", async function (req, res, next) {
  const llamada = await jugadores.getplayers();

  console.log(llamada);
  res.send(llamada);
});

router.get("/jugador/:id", async  (req, res)=> {
  const jugador = await jugadores.getplayerById(req.params.id);

  console.log(Date(jugador.fechanacimineto));
  console.log(jugador.nombre);
  //res.send(jugador);
  res.render('pages/jugador',{
   
   
    nombre: jugador.nombre,
    apellido:jugador.apellido,
    fecha:Date(jugador.fechanacimineto),
    documento:jugador.documento,
    genero:jugador.genero,
    imagen:jugador.imagen

  });



});




const canchas = require("../api/cancha");
/* GET users listing. */
router.get("/canchas", async function (req, res, next) {
  const llamada = await canchas.getcourts();

  console.log(llamada);
  res.send(llamada);
});


router.get("/cancha/:id", async  (req, res)=> {
  const cancha = await canchas.getCourtById(req.params.id);

 
});







module.exports = router;
