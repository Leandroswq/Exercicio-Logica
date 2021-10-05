const mercado = require('./mercado');

// complete a função maisCara para retornar os dados da fruta com o maior preço;
function maisCara() {
  let result = '';
  let preco = 3.40;
  for (const fruta of mercado.frutas) {
    if (fruta.preco > preco) {
      result = fruta;
      preco = fruta.preco;
    }
  }
  return result;
}

console.log(maisCara())

module.exports = maisCara;
