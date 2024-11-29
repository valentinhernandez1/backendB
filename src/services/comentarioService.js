const Comentario = require('../models/Comentario');
const Usuario = require('../models/Usuario');
const Post = require('../models/Post');

exports.getAllComentarios = async () => {
  return await Comentario.findAll();
};

exports.getComentarioById = async (id) => {
  const comentario = await Comentario.findByPk(id);
  if (!comentario) {
    throw new Error('Comentario no encontrado');
  }
  return comentario;
};

exports.saveComentario = async (comentarioData) => {
  const usuario = await Usuario.findByPk(comentarioData.userCreator.userId);
  const post = await Post.findByPk(comentarioData.post.idPost);

  if (!usuario || !post) {
    throw new Error('Usuario o Post no encontrado');
  }

  comentarioData.userCreator = usuario;
  comentarioData.post = post;

  return await Comentario.create(comentarioData);
};

exports.findByPost_IdPost = async (postId) => {
  return await Comentario.findAll({ where: { id_post: postId } })
};

exports.updateComentario = async (id, comentarioData) => {
  const comentario = await Comentario.findByPk(id);
  if (!comentario) {
    throw new Error('Comentario no encontrado');
  }

  await comentario.update(comentarioData);
  return comentario;
};


exports.deleteComentario = async (id) => {
  const comentario = await Comentario.findByPk(id);
  if (!comentario) {
    throw new Error('Comentario no encontrado');
  }

  await comentario.destroy();
  return { message: 'Comentario eliminado correctamente' };
};
