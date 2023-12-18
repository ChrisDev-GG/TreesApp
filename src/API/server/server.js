const express = require('express');
const cors = require('cors');
const app = express();

const treesRouter = require('./routes/trees.js');
const locationsRouter = require('./routes/locations');
const photosRouter = require('./routes/photos');
const commentsRouter = require('./routes/comments');

// Utilizar cors para permitir solicitudes de origen cruzado
app.use(cors());
app.use(express.json());

/* ==================== RUTAS PARA LA API ( ./routes ) ====================== */
app.use(treesRouter);
app.use(locationsRouter);
app.use(photosRouter);
app.use(commentsRouter);
/* ========================================================================== */

module.exports = function startServer(port) {
  return new Promise((resolve, reject) => {
    const server = app.listen(port, (err) => {
      if (err) {
        reject(err);
      }
      resolve(server);
    });
  });
};
