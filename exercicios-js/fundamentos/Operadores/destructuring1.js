// Novo recurso do ECMASCRIPT 2015

const pessoa = {
    nome: 'Yuki',
    idade: 25,
    mundo: {
        galaxy: 'Envolp',
        ecossistema: 'bnb (bonito nobre bom)'
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { mundo: homesweet } = pessoa;    // Forma de criar outro nome para uma propriedade
console.log(homesweet);

const { sobrenome, humor = true } = pessoa;
console.log(sobrenome, humor);

const { mundo: { galaxy, ecossistema, especies } } = pessoa;
console.log(galaxy, ecossistema, especies);

//const { refri: { tipo, temp } } = pessoa;  // Se tentar acessar algum objeto não definido ocorrerá um erro
//console.log(tipo, temp);