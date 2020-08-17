var express = require("express");
var router = express.Router();
const jugadores = require("../api/jugador");
const canchas = require("../api/cancha");

/*+-------------------------------------------------------------+
  |                             PAGINAS      
  +-------------------------------------------------------------+
*/
/* GET users listing. */

/* GET home page. */

router.get("/", async function (req, res, next) {
  const llamada = await jugadores.getplayers();

  res.render("pages/inicio", { llamada });
});

router.get("/inscribirme", async function (req, res, next) {
  const llamada = await canchas.getcourts();
  res.render("pages/canchas", { llamada });
});

/*esto por ahora funciona */
router.get("/cancha/:id", async (req, res) => {
  const cancha = await canchas.getCourtById(req.params.id);

  res.render("pages/cancha", { cancha });
});

router.get("/backoffice", async (req, res) => {
  res.render("pages/administrador");
});

/*-----------------------------------------------------------------*/

/* GET agregar page */
router.get("/agregar", function (req, res, next) {
  res.render("pages/agregar", { title: "Agregar algo" });
});

/* POST agregar page */
router.post("/agregar_proceso", function (req, res, next) {
  console.log(req.body);
  console.log("Titulo", req.body.titulo);
  console.log("Autor", req.body.autor);
  console.log("Precio", req.body.precio);

  res.send("Vas bien! Mira la info en tu terminal de PowerSheeeeelll");
  // res.render('pages/agregar', { title: 'Agregar algo' });
});

/* GET contacto page. */
router.get("/contacto", function (req, res, next) {
  res.render("pages/contacto", { title: "Contacto!" });
});

/* GET búsqueda page. */
router.get("/busqueda", function (req, res, next) {
  res.render("pages/busqueda", { title: "¿Queres buscar algo?" });
});

/* GET búsqueda proceso */
router.get("/busqueda_proceso", function (req, res, next) {
  const termino = req.query.termino;
  console.log("Se buscó:", termino);

  res.send(termino);
  // res.render('pages/busqueda', { title: '¿Queres buscar algo?' });
});

/*+-------------------------------------------------------------+
  |                             APIS                            |
  +-------------------------------------------------------------+
*/

/* GET users listing. */

router.get("/jugadores", async function (req, res, next) {
  const llamada = await jugadores.getplayers();
  res.send(llamada);
});

router.get("/jugador/:id", async (req, res) => {
  const jugador = await jugadores.getplayerById(req.params.id);
  res.send(jugador);
});

/* POST users listing. */

router.post("/agregar_jugador", async (req, res) => {
  console.log(req.body.params);

  const jugador = await jugadores.createplayer(
    req.body.nombre,
    req.body.apellido,
    Date(req.body.fechanacimiento),
    req.body.documento,
    req.body.genero,
    req.body.imagen,
    req.body.canchaId
  );

  //console.log(jugador);
  res.send(jugador);
});

router.post("/agregar_cancha", async (req, res) => {
  console.log(req.body.params);

  const cancha = await canchas.createcourt(
    req.body.nombre,
    req.body.direccion,
    req.body.partido,
    req.body.localidad,
    req.body.imagen
  );

  //console.log(jugador);
  res.send(cancha);
});

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
