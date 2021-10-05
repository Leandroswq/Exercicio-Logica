const mercado = require('./mercado');

// complete a função buscaValorNutritivo, que ao receber um valor nutritivo como parametro,
// retorna um array com o nome de todas as frutas que possui esse valor nutritivo
function buscaValorNutritivo(nutricao) {
  let frutas = [];
  let aux = mercado.frutas;
  for (const fruta of aux) {
    if (fruta.valorNutritivo.find(vitamina => vitamina === nutricao)) {
      frutas.push(fruta.nome)
    }
  }
  return frutas
}

console.log(buscaValorNutritivo('C'))
module.exports = buscaValorNutritivo;
