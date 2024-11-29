const express = require('express');
const router = express.Router();
const puntuacionController = require('../controllers/puntuacionController');

router.get('/', puntuacionController.obtenerPuntuaciones);
router.get('/:id', puntuacionController.obtenerPuntuacionPorId);
router.post('/', puntuacionController.crearPuntuacion);
router.put('/:id', puntuacionController.actualizarPuntuacion);
router.delete('/:id', puntuacionController.eliminarPuntuacion);

module.exports = router;

