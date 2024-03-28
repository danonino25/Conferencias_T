// Rutas para conferencia
const express = require('express');
const router = express.Router();
const conferenciaController = require('../controllers/conferenciaController');

// api/productos
router.post('/', conferenciaController.crearConferencia);
router.get('/', conferenciaController.obtenerConferencias);
router.put('/:id', conferenciaController.actualizarConferencia);
router.get('/:id', conferenciaController.obtenerConferencia);
router.delete('/:id', conferenciaController.eliminarConferencia);

module.exports = router;