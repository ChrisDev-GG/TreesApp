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

  /* Test para verificar obtención de todos las ubicaciones de la base de datos */
  describe('TREES API TESTING', () => {
    it('Obtener todos las ubicaciones', async () => {
      const response = await supertest(server).get('/locations');
      expect(response.status).toBe(200);     // Verificar obtención del recurso
      expect(response.body).toHaveLength(9); // Verificar la cantidad de ubicaciones
    });
  });
});
