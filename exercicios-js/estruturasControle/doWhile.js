function inteiroAleatorio(min, max) {
    const valor = Math.random() * (min - max) + min;
    return Math.floor(valor);
}

let tenta = 0;

do {
    tenta = inteiroAleatorio(0, 10);
    console.log('A opção escolhida foi ', tenta);
} while (tenta != 2);