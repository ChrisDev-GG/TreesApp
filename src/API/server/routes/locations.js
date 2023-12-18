const express = require('express');
const pool = require('../db');

const router = express.Router();

// Obtener todas las ubicaciones de la base de datos
router.get('/locations', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM roket.ubicaciones');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
});

module.exports = router;

