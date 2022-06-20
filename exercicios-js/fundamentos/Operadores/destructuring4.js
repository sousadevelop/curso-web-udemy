//DESTRUCTURING com função e ARRAY
function rand([min = 0, max = 1000] = []) {
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.ceil(valor);
}

console.log(rand([80, 40]));
console.log(rand([255]));
console.log(rand([995, ]));
console.log(rand([, 10]));
console.log(rand([]));
console.log(rand()); // Aqui só não vai dar erro porque eu passei colchetes vazio para casos assim ;)