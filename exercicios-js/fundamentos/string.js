const stilingue = 'Marvel';

console.log(stilingue.charAt(3)); // puxa a letra do indice passado, nesse caso, 0,1,2,*3*

console.log(stilingue.charCodeAt(3)); // puxa a referencia do *v* na tabela UniCode

console.log(stilingue.indexOf('3')); // verifica se há um número *3* na variável

console.log(stilingue.substring(1)); // SUBSTRING :: tira um valor do indice da palara, neste caso, tira o *M*

console.log(stilingue.substring(0,3));

console.log('stilingue '.concat(stilingue).concat("!")); // é melhor concatenar com '+'

console.log(stilingue.replace(3,'e')); // troca o primeiro parametro, se existir, pelo segundo

console.log('Ana,Maria,Pedro'.split(',')); // transforma em array por meio do separador ','