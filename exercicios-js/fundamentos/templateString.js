/* TEMPLATE STRING :: você usa => ${}
 *                    para colocar variáveis
 *                    Tudo o que ficar dentro das ` ` vai ser considerado como string,
 *                    e concatenará automaticamente. 
 */                    


const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!';

const template = `
    Olá
    ${ nome } ! `;

console.log(concatenacao, template);

// expressoes ...

console.log(`1+1=${1+1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}! `)