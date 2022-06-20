function compras(trab1, trab2) {
    var x = 'Vou comprar um Macbook';
    var y = 'Vou comprar um Notebook da Dell';
    var z = 'Vou comer pizza com ela';

    if (trab1 && trab2 === true) {
        console.log(x, 'e', z);
    } else
        if (trab1 || trab2 === true) {
            console.log(y, 'e', z);
        } else {
            console.log(z);
        }
    if (!z) {
        console.log('Modo Fitness Ligado!');
    }
}

compras();

// OUTRA POSSIBILIDADE DE FAZER ESSE EXERCÍCIO É ::
function buy(trab1, trab2) {
    const comprarSalgado = trab1 || trab2;
    const comprarMacbook = trab1 && trab2;
    //const comprarNotebookDell = !!(trab1 ^ trab2);
    const comprarNotebookDell = trab1 != trab2;
    const modeFitnessOn = !comprarSalgado;

    return { comprarSalgado, comprarMacbook, comprarNotebookDell, modeFitnessOn }
}
console.log(buy(true, true));
console.log(buy(true, false));
console.log(buy(false, true));
console.log(buy(false, false));