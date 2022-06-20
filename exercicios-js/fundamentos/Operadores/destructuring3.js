//DESTRUCTURING com função
function rand({ min = 0, max = 1000 } = {}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);       //Math.floor é usado para arredondar os valores
}

const obj = { max: 255, min:25 };
console.log(rand(obj));
console.log(rand({min:468}));
console.log(rand({}));
console.log(rand());