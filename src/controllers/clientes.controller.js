const clientesService = require('../services/clientes.service');

module.exports = {
    listarClientes: (req, res) => {
        const data = clientesService.listar();
        res.json(data);
    },

    crearCliente: (req, res) => {
        const cliente = clientesService.crear(req.body);
        res.status(201).json(cliente);
    }
};