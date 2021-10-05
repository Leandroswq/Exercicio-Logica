const mercado = require('./mercado');

// complete a função "nomeFrutas", para retornar um array com o nome de todas as frutas da constante mercado;
function nomeFrutas() {
  let frutas = [];
  let aux = mercado.frutas;
  for (let index = 0; index < aux.length; index += 1){
    frutas.push(aux[index].nome)
  }
    return frutas
}
module.exports = nomeFrutas;
