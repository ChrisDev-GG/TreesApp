const express = require('express');
const pool = require('../db');

const router = express.Router();

// Ruta para manejar las solicitudes POST de comentarios
router.post('/send-comments/:id', async (req, res) => {
  const id = req.params.id;
  const postulante = 'chris-amr-dev';
  const comment = req.body.comment;
  console.log(comment);
  try {
    // Verificar si el comentario no está vacío
    if (!comment || comment.trim() === '') {
      return res.status(400).json({ message: `El comentario no puede estar vacío.`, code: 3 });
    }

    // Insertar el comentario en la base de datos
    const insertQuery = 'INSERT INTO roket.comentarios(arbol_id, postulante_id, comentario) VALUES($1,$2,$3)';
    const values = [id, postulante, comment];
    const result = await pool.query(insertQuery, values);
    if (result.rowCount > 0) {
      // Si se inserta correctamente, se envía una respuesta exitosa con los datos del comentario insertado
      console.log(result);
      res.json({ message: 'Comentario agregado correctamente', comentario: result.rows[0] });
    } else {
      res.status(500).json({ message: 'No se pudo agregar el comentario' });
    }
  } catch (error) {
    // Si ocurrió un error al insertar, enviar respuesta con código 2 (error)
    console.error('Error al insertar el comentario:', error);
    res.status(500).json({ message: 'Error al insertar el comentario.', code: 2 });
  }
});

module.exports = router;

