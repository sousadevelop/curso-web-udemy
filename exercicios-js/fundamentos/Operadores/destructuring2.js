// DESTRUCTURING COM ARRAY
const [a] = [15];
console.log(a);

const [n1, ,n3, , n5, n6 = 0] = [5,3,5,9];
console.log(n1,n3,n5,n6);

const [, [, ava]] = [[,9,5], [5,6,7]];
console.log(ava);