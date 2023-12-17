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

  /* Test para verificar obtención de todas las url de fotos de la base de datos  */
  describe('TREES API TESTING', () => {
    it('Obtener todas las fotos', async () => {
      const response = await supertest(server).get('/photos');
      expect(response.status).toBe(200);     // Verificar obtención del recurso
      expect(response.body).toHaveLength(12); // Verificar la cantidad de fotos
    });
  });
});
