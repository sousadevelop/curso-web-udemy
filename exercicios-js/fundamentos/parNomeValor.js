// par nome/valor (ou par chave/valor)
const saudade = 'triste'; // contexto léxico 1

function exec() {
    const saudade = 'pensamentos';  // contexto léxico 2
    return saudade;
}


// Objetos são grupos aninhados de pares nome/valor
const pet = {
    nome: 'Isshu',
    idade: 3,
    peso: 10.2,
    tipo: {
        raca: 'Golden',
        especie: 'dog',
        sexo: 'm'
    }
}
console.log(saudade);
console.log(exec());
console.log(pet);