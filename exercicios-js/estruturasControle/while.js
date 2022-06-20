function inteiroAleatorio(min, max) {
    const valor = Math.random * (min - max) + min;
    return Math.floor(valor);
}

var opcao = 0;

while(opcao != -1) {
    opcao = inteiroAleatorio(-1, 10);
    console.log('Opção escolhida foi ', opcao + '.');
}

console.log('Até a próxima!');