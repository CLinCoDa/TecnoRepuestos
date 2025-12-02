const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Rutas
const productosRoutes = require('./routes/productos.routes');
const ventasRoutes = require('./routes/ventas.routes');
const clientesRoutes = require('./routes/clientes.routes');

app.use('/api/productos', productosRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/clientes', clientesRoutes);

module.exports = app;