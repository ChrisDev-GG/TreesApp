const express = require('express');
const pool = require('../db');

const router = express.Router();

// Ruta para manejar las solicitudes POST de comentarios
router.post('/comments', async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  const postulante = 'chris-amr-dev'
  try {
    // Verificar si el comentario no está vacío
    if (!comment || comment.trim() === '') {
      return res.status(400).json({ message: 'El comentario no puede estar vacío.', code: 3 });
    }

    // Insertar el comentario en la base de datos
    const insertQuery = 'INSERT INTO comentarios(arbol_id, postulante_id, comentario) VALUES($1,$2,$3)';
    const values = [id, postulante, comment];
    await pool.query(insertQuery, values);

    // Si la inserción fue exitosa, enviar respuesta con código 1 (éxito)
    res.status(200).json({ message: 'Comentario insertado exitosamente.', code: 1 });
  } catch (error) {
    // Si ocurrió un error al insertar, enviar respuesta con código 2 (error)
    console.error('Error al insertar el comentario:', error);
    res.status(500).json({ message: 'Error al insertar el comentario.', code: 2 });
  }
});

module.exports = router;

