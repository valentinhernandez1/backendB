const Usuario = require('../models/Usuario');

exports.getAllUsuarios = async () => {
  return await Usuario.findAll();
};

exports.getUsuarioById = async (id) => {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }
  return usuario;
};

exports.saveUsuario = async (usuarioData) => {
  return await Usuario.create(usuarioData);
};

exports.getUsuarioByAuth0id = async (auth0id) => {
  const usuario = await Usuario.findOne({ where: { auth0id } });
  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }
  return usuario;
};


exports.updateUsuario = async (id, usuarioData) => {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }

  await usuario.update(usuarioData);
  return usuario;
};


exports.deleteUsuario = async (id) => {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    throw new Error('Usuario no encontrado');
  }

  await usuario.destroy();
  return { message: 'Usuario eliminado correctamente' };
};

