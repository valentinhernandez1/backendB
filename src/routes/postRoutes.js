const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.obtenerPosts);
router.get('/:id', postController.obtenerPostPorId);
router.post('/', postController.crearPost);
router.get('/search/user/:nickname', postController.obtenerPostsPorUsuario);
router.get('/search/:search', postController.obtenerPostPorBusqueda);
router.put('/:id', postController.actualizarPost);
router.delete('/:id', postController.eliminarPost);


module.exports = router;