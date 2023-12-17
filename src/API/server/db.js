const { Pool } = require('pg');
const { environment } = require('../config/env');

const pool = new Pool({
  host: environment.host,
  user: environment.user,
  database: environment.database,
  password: environment.password,
  port: environment.port,
  schema: environment.schema
});

// Query de prueba para verificar conexión a la BD Postgre
pool.query('SELECT NOW()', async (err, res) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

module.exports = pool;

