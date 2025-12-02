exports.listarProductos = (req, res) => {
  res.status(200).json([{ id: 1, nombre: "Filtro de aceite" }]);
};

exports.crearProducto = (req, res) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ mensaje: "El nombre es obligatorio" });
  }

  res.status(201).json({ id: 99, nombre });
};