const pesoAline = 2.5;
const pesoAlex = Number('5.0');

console.log(pesoAline, pesoAlex);
console.log(Number.isInteger(pesoAline));
console.log(Number.isInteger(pesoAlex));

Number.isInteger(pesoAline) ? console.log('muito loko') : console.log('Aline não é inteira');

Number.isInteger(pesoAlex) ? console.log('Alex é inteiro') : console.log('muito loko');

const nota1 = 8.56;
const nota2 = 7.86;

let peso1 = 2, peso2 = 4;

const total = nota1 * peso1 + nota2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)) // controla a qtd de casas decimais
console.log(media.toString(2)) // em binário
console.log(typeof media) // tipo da variável

///////////////////////////////////////////CUIDADOS COM NUMEROS////////////////////////////////

console.log(7 / 0)
console.log("10" / 2)
console.log("Show!" * 2)
console.log(0.1 + 0.7)
//console.log(10.toString())
console.log((10.345).toFixed(2))