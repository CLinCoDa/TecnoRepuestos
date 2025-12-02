const clientesService = require('../services/ventas.service');

module.exports = {
    listarVentas: (req, res) => {
        const data = ventasService.listar();
        res.json(data);
    },

    registrarVenta: (req, res) => {
        const venta = ventasService.crear(req.body);
        res.status(201).json(venta);
    }
};