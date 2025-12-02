// Cálculo de stock disponible
function calcularStockDisponible(stockInicial, stockReservado) {
  return stockInicial - stockReservado;
}

// Cálculo del total de una compra
function calcularTotalCompra(precioUnitario, cantidad) {
  return precioUnitario * cantidad;
}

module.exports = {
  calcularStockDisponible,
  calcularTotalCompra
};