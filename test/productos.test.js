const request = require('supertest');
const express = require('express');
const productosRoutes = require('../src/routes/productos.routes');

const app = express();
app.use(express.json());
app.use("/api/productos", productosRoutes);

describe("Pruebas de productos.routes", () => {

  // ------------------------------------
  // GET /api/productos
  // ------------------------------------
  test("GET /api/productos debe devolver lista de productos", async () => {
    const response = await request(app).get("/api/productos");

    console.log("Respuesta del servidor GET:", response.body);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty("nombre");

    
  });

  // ------------------------------------
  // POST /api/productos
  // ------------------------------------
  test("POST /api/productos debe crear un producto", async () => {
    const nuevoProducto = { nombre: "Bujía" };

    const response = await request(app)
      .post("/api/productos")
      .send(nuevoProducto);

    console.log("Respuesta POST:", response.body);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.nombre).toBe("Bujía");
  });

  test("POST /api/productos debe devolver error si falta el nombre", async () => {
    const response = await request(app)
      .post("/api/productos")
      .send({});

    console.log("Respuesta POST:", response.body.mensaje);

    expect(response.status).toBe(400);
    expect(response.body.mensaje).toBe("El nombre es obligatorio");
  });

});

