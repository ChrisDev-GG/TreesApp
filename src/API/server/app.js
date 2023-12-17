const startServer = require('./server');

const PORT = process.env.PORT || 3300;

startServer(PORT)
  .then(server => {
    console.log(`Servidor Express iniciado en el puerto ${PORT}`);
  })
  .catch(err => {
    console.error('Error al iniciar el servidor:', err);
  });

