const express = require('express');
const router = express.Router();

router.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;

  if (!nombre || !precio) {
    return res.status(400).json({ error: 'Datos incompletos' });
  }

  return res.status(201).json({
    id: 1,
    nombre,
    precio
  });
});

module.exports = router;
