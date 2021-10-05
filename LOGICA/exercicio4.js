const mercado = require('./mercado');

// complete a função frutaPredominante
// para retornar o nome da fruta que possui o maior número de meses predominantes; 
function frutaPredominante() {
  let result = '';
  let tamanho = 0;
  for (const fruta of mercado.frutas) {
    if (fruta.predominante.length > tamanho) {
      result = fruta.nome;
      tamanho = fruta.predominante.length;
    }
  }
  return result;
}

module.exports = frutaPredominante;
