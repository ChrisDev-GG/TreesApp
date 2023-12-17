const express = require('express');
const pool = require('../db');

const router = express.Router();

// Obtener todos los árboles de la base de datos
router.get('/trees', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM roket.arboles');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
});

// Obtener todos los arboles mas su ubicacion
router.get('/trees-and-locations', async (req, res) => {
  try {
    const { rows } = await pool.query(
    'select * from roket.arboles ar inner join roket.ubicaciones ub on ar.ubicacion_id = ub.ubicacion_id');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
});

// Obtener arbol y ubicacion especificos
router.get('/tree-and-location/:id', async (req, res) => {
  const treeId = req.params.id; // Obtener el ID del árbol
  try {
    const { rows } = await pool.query(`select * from roket.arboles ar inner join roket.ubicaciones ub on ar.ubicacion_id = ub.ubicacion_id where arbol_id = ${treeId}`);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Árbol no encontrado' });
    }
    res.json(rows[0]); // Devolver el árbol encontrado
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener el árbol' });
  }
});

module.exports = router;
