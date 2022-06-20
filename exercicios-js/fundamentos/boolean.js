// A " ! " (exclamação) => nega ao, como se fosse um 'não'...ou seja, " !! ", duas delas, torna algo ao seu estado original

let isAtivo = false;

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!! isAtivo)

console.log('os verdadeiros ...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos ...')
console.log(!!0)
console.log(!!'')
console.log(!! null)
console.log(!! NaN)
console.log(!! undefined)
console.log(!!(isAtivo=false))

console.log('pra finalizar ...')
console.log(!!('' || null ||0||' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')