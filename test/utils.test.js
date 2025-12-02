const { calcularStockDisponible, calcularTotalCompra } = require('../src/services/utils');

test('calcula stock disponible correctamente', () => {
  expect(calcularStockDisponible(100, 30)).toBe(70);
});

test('calcula total de compra correctamente', () => {
  expect(calcularTotalCompra(20, 3)).toBe(60);
});