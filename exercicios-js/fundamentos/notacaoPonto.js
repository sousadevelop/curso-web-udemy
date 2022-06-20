console.log(typeof console);


console.log(Math.ceil(4.5));

const onni = {};
onni.nome = 'Tsugi';
onni['peso'] = 80.4;

console.log(onni);

function Obj(nome) {
    this.nome = nome;       //CRIA UM ATRIBUTO PÚBLICO COM O this.
    this.power = function() {
        console.log('Derrotar Yonkous');
    }
}

const obj2 = new Obj('Law');
const obj3 = new Obj('Kid');

console.log(obj2.nome);
console.log(obj3.nome);
obj3.power();