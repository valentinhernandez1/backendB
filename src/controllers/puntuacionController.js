// src/controllers/puntuacionController.js
const PuntuacionService = require('../services/puntuacionService');

exports.obtenerPuntuaciones = async (req, res) => {
  try {
    const puntuaciones = await PuntuacionService.getAllPuntuaciones();
    res.json(puntuaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerPuntuacionPorId = async (req, res) => {
  try {
    const puntuacion = await PuntuacionService.getPuntuacionById(req.params.id);
    res.json(puntuacion);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.crearPuntuacion = async (req, res) => {
  try {
    const puntuacion = await PuntuacionService.savePuntuacion(req.body);
    res.status(201).json(puntuacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.actualizarPuntuacion = async (req, res) => {
  try {
    const puntuacion = await PuntuacionService.updatePuntuacion(req.params.id, req.body);
    res.json(puntuacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarPuntuacion = async (req, res) => {
  try {
    await PuntuacionService.deletePuntuacion(req.params.id);
    res.json({ message: 'Puntuación eliminada correctamente' });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
