const mercado = require('./mercado');

// complete a função "vitaminaC",
// para retornar um array com o nome de todas as frutas que contenham a vitamina C;
function vitaminaC() {
  let frutas = [];
  let aux = mercado.frutas;
  for (const fruta of aux) {
    if (fruta.valorNutritivo.find(vitamina => vitamina === 'C')) {
      frutas.push(fruta.nome)
    }
  }
  return frutas
}

console.log(vitaminaC())
module.exports = vitaminaC;
