const express = require('express');
const router = express.Router();
const service = require('../controllers/service.controller');

router.get('/', service.listarLugares);
router.get('/:id', service.buscarLugar);
router.post('/', service.crearEmpleado);
router.put('/:id', service.editarLugar);
router.delete('/:id', service.eliminarLugar);
// router.post('/mail', service.enviarMail);

module.exports = router;