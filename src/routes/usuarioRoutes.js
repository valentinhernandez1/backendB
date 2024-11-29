const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.getAllUsuarios);
router.get('/:id', usuarioController.obtenerUsuarioPorId);
router.post('/', usuarioController.crearUsuario);
router.get('/by-auth0id/:auth0id', usuarioController.getUsuarioByAuth0id);
router.put('/:id', usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;
