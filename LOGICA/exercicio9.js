const mercado = require("./mercado");

// complete a função buscaPorPredominante, que ao receber o mes como valor,
// retorna uma lista com todos os nomes das frutas que esse mês aparece no campo predominante
function buscaPorMesPredominante(mes) {
  let frutas = [];
  let aux = mercado.frutas;
  for (const fruta of aux) {
    if (fruta.predominante.find(predominante => predominante === mes)) {
      frutas.push(fruta.nome)
    }
  }
  return frutas
}

module.exports = buscaPorMesPredominante;
