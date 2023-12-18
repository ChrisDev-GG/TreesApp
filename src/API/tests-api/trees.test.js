const supertest = require('supertest');
const startServer = require('../server/server');


const PORT = 3300; // Puerto para pruebas

describe('Test de la API Express', () => {
  let server;

  beforeAll(async () => {
    server = await startServer(PORT);
  });

  afterAll(async () => {
    await server.close();
  });

  /* Test para verificar obtención de todos los arboles de la base de datos */
  describe('TREES API TESTING', () => {
    it('Obtener todos los árboles', async () => {
      const response = await supertest(server).get('/trees');
      expect(response.status).toBe(200);     // Verificar obtención del recurso
      expect(response.body).toHaveLength(7); // Verificar la cantidad de árboles
    });
  });

  /* Test para verificar obtención de todos los arboles de la base de datos mas su localizacion (Consulta con JOIN) */
  describe('TREES API TESTING', () => {
    it('Obtener todos los arboles mas su localizacion', async () => {
      const response = await supertest(server).get('/trees-and-locations');
      expect(response.status).toBe(200);     // Verificar obtención del recurso
      expect(response.body).toHaveLength(7); // Verificar la cantidad de árboles
    });
  });

  /* Test para verificar obtención de un arbol mas su localizacion de la base de datos por su id (Consulta con JOIN) */
  describe('TREES API TESTING', () => {
    it('Obtener arbol mas locacion por su id', async () => {
      const response = await supertest(server).get('/tree-and-location/1'); // Utilizando id = 1 por defecto
      expect(response.status).toBe(200);      // Verificar obtención del recurso
      expect(response.body.arbol_id).toBe(1); // Verificar la cantidad de árboles
    });
  });

});
