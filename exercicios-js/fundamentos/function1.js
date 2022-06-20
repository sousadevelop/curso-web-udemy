// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3.5, 'oloko');
imprimirSoma(5);
imprimirSoma(5, 4, 8, 9);
imprimirSoma();
imprimirSoma([0], 5);

// Função com retorno
function soma(a, b = 0) {       //TRATANDO PARAMETRO
    return a + b;
}

console.log(soma(5));

soma(2, 6);  // COMO NÃO TEM NADA PARA IMPRIMIR, ELE NÃO APRESENTA NADA, POR ISSO PRECISA DE UM CONSOLE.LOG
