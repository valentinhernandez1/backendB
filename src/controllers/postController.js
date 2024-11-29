const PostService = require('../services/postService');

exports.obtenerPosts = async (req, res) => {
  try {
    const posts = await PostService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerPostPorId = async (req, res) => {
  try {
    const post = await PostService.getPostById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.crearPost = async (req, res) => {
  try {
    const post = await PostService.savePost(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerPostsPorUsuario = async (req, res) => {
  try {
    const posts = await PostService.getPostsByUser(req.params.nickname);
    res.json(posts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.obtenerPostPorBusqueda = async (req, res) => {
  try {
    const posts = await PostService.getPostBySearch(req.params.search);
    res.json(posts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.actualizarPost = async (req, res) => {
  try {
    const postActualizado = await PostService.updatePost(req.params.id, req.body);
    res.json(postActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarPost = async (req, res) => {
  try {
    await PostService.deletePost(req.params.id);
    res.status(204).send(); // No content
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
