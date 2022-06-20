// Armazenando uma função em uma variável

const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma função arrow/arrow function em uma variável
const soma = (a, b) => {
    return a + b;
}

soma(5,6);

console.log(soma(5,6));

// Return implícito
const multiplica = (a, b) => a * b;         //Sem as chaves ele retorna automáticamente
console.log(multiplica(5, 5));

const imprima = a => console.log(a);
imprima(!true);