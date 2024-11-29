const { Op } = require('sequelize');
const Post = require('../models/Post');
const Usuario = require('../models/Usuario');

exports.getAllPosts = async () => {
  return await Post.findAll();
};

exports.getPostById = async (id) => {
  const post = await Post.findByPk(id);
  if (!post) {
    throw new Error('Post no encontrado');
  }
  return post;
};

exports.savePost = async (postData) => {
  const usuario = await Usuario.findByPk(postData.userCreator.userId);

  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }

  postData.userCreator = usuario;

  return await Post.create(postData);
};

exports.getPostsByUser = async (nickname) => {
  const usuario = await Usuario.findOne({ where: { nickname } });
  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }
  return await Post.findAll({ where: { user_creator_id: usuario.userId } });
};

exports.getPostBySearch = async (search) => {
  return await Post.findAll({
    where: {
      [Op.or]: [
        { contenido: { [Op.iLike]: `%${search}%` } },
        { tema: { [Op.iLike]: `%${search}%` } },
        { titulo: { [Op.iLike]: `%${search}%` } }
      ]
    }
  });
};

exports.updatePost = async (id, postData) => {
  const post = await Post.findByPk(id);
  if (!post) {
    throw new Error('Post no encontrado');
  }

  await post.update(postData);
  return post;
};

exports.deletePost = async (id) => {
  const post = await Post.findByPk(id);
  if (!post) {
    throw new Error('Post no encontrado');
  }

  await post.destroy();
  return { message: 'Post eliminado correctamente' };
};

