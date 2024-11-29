const ComentarioService = require('../services/comentarioService');

exports.obtenerComentarios = async (req, res) => {
  try {
    const comentarios = await ComentarioService.getAllComentarios();
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerComentarioPorId = async (req, res) => {
  try {
    const comentario = await ComentarioService.getComentarioById(req.params.id);
    res.json(comentario);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.crearComentario = async (req, res) => {
  try {
    const comentario = await ComentarioService.saveComentario(req.body);
    res.status(201).json(comentario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerComentariosPorPostId = async (req, res) => {
  try {
    const comentarios = await ComentarioService.findByPost_IdPost(req.params.postId);
    res.json(comentarios);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.actualizarComentario = async (req, res) => {
  try {
    const comentarioActualizado = await ComentarioService.updateComentario(req.params.id, req.body);
    res.json(comentarioActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarComentario = async (req, res) => {
  try {
    await ComentarioService.deleteComentario(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
