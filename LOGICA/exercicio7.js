const mercado = require('./mercado');

// complete a função maisBarata para retornar os dados da fruta mais barata;
function maisBarata() {
  let result = mercado.frutas[0];
  let preco = mercado.frutas[0].preco;
  for (const fruta of mercado.frutas) {
    if (fruta.preco < preco) {
      result = fruta;
      preco = fruta.preco;
    }
  }
  return result;
}

module.exports = maisBarata;
