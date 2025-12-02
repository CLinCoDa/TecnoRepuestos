const request = require('supertest');
const express = require('express');
const productosRoute = require('../src/routes/productos');

const app = express();
app.use(express.json());
app.use(productosRoute);

test('creación de producto: debe retornar 201 y el producto creado', async () => {
  const respuesta = await request(app)
    .post('/productos')
    .send({ nombre: 'Filtro de aire', precio: 25 });

  expect(respuesta.status).toBe(201);
  expect(respuesta.body.nombre).toBe('Filtro de aire');
  expect(respuesta.body.precio).toBe(25);
});