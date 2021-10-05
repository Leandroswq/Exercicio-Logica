const mercado = require('./mercado');

// complete a função buscaPorNome, que ao receber o nome da fruta, retorna um objeto com os dados da fruta
function buscaPorNome(nome) {
  let result = '';
  for (const fruta of mercado.frutas) {
    if (fruta.nome === nome) {
      result = fruta;
    }
  }
  return result;
}

module.exports = buscaPorNome;
