const express = require('express');
const pool = require('../db');

const router = express.Router();

// Obtener todas las fotos de la base de datos
router.get('/photos', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM roket.fotos');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
});

// Obtener todas las fotos de un árbol específico de la base de datos
router.get('/photos-for/:id', async (req, res) => {
  const treeId = req.params.id; // Obtener el ID del árbol
  try {
    const { rows } = await pool.query(`select * from roket.fotos where arbol_id = ${treeId}`);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Fotos no encontradas' });
    }
    res.json(rows); // Devolver las fotos del arbol
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener las fotos de el árbol' });
  }
});

module.exports = router;
