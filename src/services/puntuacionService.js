const Puntuacion = require('../models/Puntuacion');
const Usuario = require('../models/Usuario');
const Post = require('../models/Post');
const Comentario = require('../models/Comentario');

exports.getAllPuntuaciones = async () => {
  return await Puntuacion.findAll();
};

exports.createPuntuacion = async (puntuacionData) => {
  const usuario = await Usuario.findByPk(puntuacionData.user.userId);

  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }

  puntuacionData.user = usuario;

  if (puntuacionData.post) {
    const post = await Post.findByPk(puntuacionData.post.idPost);
    if (!post) {
      throw new Error('Post no encontrado');
    }
    puntuacionData.post = post;
  } else if (puntuacionData.comentario) {
    const comentario = await Comentario.findByPk(puntuacionData.comentario.commentId);
    if (!comentario) {
      throw new Error('Comentario no encontrado');
    }
    puntuacionData.comentario = comentario;
  } else {
    throw new Error('La puntuación debe tener un post o un comentario asociado');
  }

  return await Puntuacion.create(puntuacionData);
};

exports.contarLikesPorPost = async (postId) => {
  const likesPositivos = await Puntuacion.count({ where: { post_id: postId, valor: 1 } });
  const likesNegativos = await Puntuacion.count({ where: { post_id: postId, valor: -1 } });
  return [likesPositivos, likesNegativos];
};

exports.contarLikesPorComentario = async (commentId) => {
  const likesPositivos = await Puntuacion.count({ where: { comentario_id: commentId, valor: 1 } });
  const likesNegativos = await Puntuacion.count({ where: { comentario_id: commentId, valor: -1 } });
  return [likesPositivos, likesNegativos];
};

exports.getPuntuacionesByUserNickname = async (nickname) => {
  const usuario = await Usuario.findOne({ where: { nickname } });
  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }
  return await Puntuacion.findAll({ where: { user_id: usuario.userId } });
};


exports.actualizarPuntuacion = async (id, puntuacionData) => {
  try {
    const puntuacion = await Puntuacion.findByPk(id);
    if (!puntuacion) {
      throw new Error('Puntuacion no encontrada');
    }
    // Actualiza solo los campos permitidos
    return await puntuacion.update(puntuacionData);
  } catch (error) {
    throw new Error('Error al actualizar la puntuacion: ' + error.message);
  }
};


exports.eliminarPuntuacion = async (id) => {
  try {
    const puntuacion = await Puntuacion.findByPk(id);
    if (!puntuacion) {
      throw new Error('Puntuacion no encontrada');
    }
    await puntuacion.destroy();
    return puntuacion;
  } catch (error) {
    throw new Error('Error al eliminar la puntuacion: ' + error.message);
  }
};
