const express = require('express');
const router = express.Router();
const service = require('../controllers/service.controller');

router.get('/lugares', service.listarLugares);
router.get('/lugares/:id', service.buscarLugar);
router.post('/lugares', service.crearLugar);
router.put('/lugares/:id', service.editarLugar);
router.delete('/lugares/:id', service.eliminarLugar);
router.post('/email', service.enviarMail);

module.exports = router;