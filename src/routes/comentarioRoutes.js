const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

router.get('/', comentarioController.obtenerComentarios);
router.get('/:id', comentarioController.obtenerComentarioPorId);
router.post('/', comentarioController.crearComentario);
router.get('/by-post/:postId', comentarioController.obtenerComentariosPorPostId);
router.put('/:id', comentarioController.actualizarComentario);
router.delete('/:id', comentarioController.eliminarComentario); 

module.exports = router;
