const mercado = require("./mercado");

// complete a função diaDesconto, que ao receber o dia da semana ("seg", "ter", etc..),
// retorna uma lista com o nome das frutas que estão com desconto neste dia;
function diaDescontos(dia) {
  let id = mercado.descontoSemana[dia];
  let result = [];
  for(const fruta of mercado.frutas){
    for(const indice of id){
      if(indice === fruta.id){
        result.push(fruta.nome);
      }
    }
  }
  return result;
}

module.exports = diaDescontos;
