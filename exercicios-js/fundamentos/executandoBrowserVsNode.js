// Dentro de NODE cada arquivo é um module, são como uma biblioteca com sessões e pastas em cada uma.
// Diferente do BROWSER, onde tudo é misturado em um único arquivo GLOBAL.
let a = 5;

global.b = 159;
this.c = 357;
this.d = true;

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);   //
console.log(module.exports === this);
console.log(module.exports);

//Criando uma variável sem escrupulos: sem usar var, let ou const !
abc = 9;        // Não crie variáveis que fiquem em escopo global !!
console.log(global.abc);


//                   EXPERIMENTOS                 //

/*module.exports = { e: 'Kame', f:'Hame', g:'Haaa...' };        //Aqui funciona
console.log(module.exports);*/

/*this = { e: 'Kame', f:'Hame', g:'Haaa...' };                  //Aqui não funciona
console.log(this);*/