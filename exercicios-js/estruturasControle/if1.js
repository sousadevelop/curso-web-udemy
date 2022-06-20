const resultado = (nota) => {
    if(nota >= 7) {
        console.log('Aprovado com ', nota);
    }
}

resultado(7.8);

const digoVerdade = (valor) => {
    if(valor) {
        console.log('É verdade...', valor);
    }
}

digoVerdade(!!'comi');
digoVerdade(0);
digoVerdade('');
digoVerdade(null);
digoVerdade(NaN);
digoVerdade(undefined);