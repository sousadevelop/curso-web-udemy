// QUANDO COLOCAMOS UMA VARIÁVEL DENTRO DE OUTRA, ESTAMOS DANDO A ELA O ENDEREÇO DA MEMÓRIA  //
// AQUI PASSAMOS A REFERÊNCIA DO LOCAL :: FUNÇÕES, ARRAY, OBJETO

let a = {value: 1};

let b = a;

console.log(b);

b.value = 0;

console.log(a);


// QUANDO TRABALHAMOS COM TIPOS PRIMITIVOS NÓS SÓ FAZEMOS UMA CÓPIA DO VALOR //
// AQUI PASSAMOS UMA CÓPIA DO VALOR :: TIPOS PRIMITIVOS

let c = 3;

let d = c;

d++;

console.log(d);

console.log(c);


// SOBRE UNDEFINED E NULL

let valor; // não inicializada
console.log(valor);

valor = null; // zera o valor, indicando que ele não terá valor algum
console.log(valor);
// console.log(valor.toString()); ERRO!         => Não posso tentar acessar um valor de uma variável com valor null

const product = {};
console.log(product.preco);
console.log(product);

product.preco = 2.45;
console.log(product);

product.preco = undefined; // nunca atribua undefined
console.log(!!product.preco);
console.log(!product.preco);

console.log(product);

product.preco = null; // tira qualquer valor e deixa zeradoo
console.log(!!product.preco);
console.log(!product.preco);