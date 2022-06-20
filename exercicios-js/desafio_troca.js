let a = 7;
let b = 94;

// depois da troca... a = 94 e b = 7

let c = a;
a = b;
b = c;

// Outra forma de trocar no Javascript é usando [a, b] = [b,a]

console.log("Agora com a troca o valor de A é: " + a + ". E, B é: " + b);