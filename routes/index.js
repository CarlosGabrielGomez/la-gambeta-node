var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET agregar page */
router.get('/agregar', function(req, res, next) {
  res.render('pages/agregar', { title: 'Agregar algo' });
});

/* POST agregar page */
router.post('/agregar_proceso', function(req, res, next) {
  console.log(req.body)
  console.log('Titulo', req.body.titulo)
  console.log('Autor', req.body.autor)
  console.log('Precio', req.body.precio)

  res.send('Vas bien! Mira la info en tu terminal de PowerSheeeeelll');
  // res.render('pages/agregar', { title: 'Agregar algo' });
});

/* GET contacto page. */
router.get('/contacto', function(req, res, next) {
  res.render('pages/contacto', { title: 'Contacto!' });
});

/* GET búsqueda page. */
router.get('/busqueda', function(req, res, next) {
  res.render('pages/busqueda', { title: '¿Queres buscar algo?' });
});

/* GET búsqueda proceso */
router.get('/busqueda_proceso', function(req, res, next) {
  const termino = req.query.termino;
  console.log('Se buscó:', termino);
  
  res.send(termino);
  // res.render('pages/busqueda', { title: '¿Queres buscar algo?' });
});

module.exports = router;
