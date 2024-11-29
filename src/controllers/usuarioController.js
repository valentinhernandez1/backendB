const UsuarioService = require('../services/usuarioService');


exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuarioService.getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await UsuarioService.getUsuarioById(req.params.id);
    res.json(usuario);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.crearUsuario = async (req, res) => {
  try {
    const usuario = await UsuarioService.saveUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsuarioByAuth0id = async (req, res) => {
  try {
    const usuario = await UsuarioService.getUsuarioByAuth0id(req.params.auth0id);
    res.json(usuario);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.actualizarUsuario = async (req, res) => {
  try {
    const usuario = await UsuarioService.updateUsuario(req.params.id, req.body);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
  
exports.eliminarUsuario = async (req, res) => {
  try {
      const usuario = await UsuarioService.deleteUsuario(req.params.id);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.status(200).json({ message: 'Usuario eliminado exitosamente', usuario });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  
