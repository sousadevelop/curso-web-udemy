const valores = [5.8, 6.5, 6.1, 7.3];

console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 55;
console.log(valores);

valores[10] = 25;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, true, null, 'olhai'); // INSERE DADOS
console.log(valores);

console.log(valores.pop()); // RETORNA SOMENTE O ÚLTIMO VALOR DO ARRAY

delete valores[0];

console.log(typeof valores); // ARRAY É DO TIPO OBJETO

let array = ['quero', 'falar', 'tudo', 'o', 'que', 'digo'];

console.log(array)