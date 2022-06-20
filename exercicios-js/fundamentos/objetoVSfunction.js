console.log(typeof Object);
console.log(typeof new Object);  // Usar o NEW te permite instanciar uma function, isto é, criar um objeto

const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof new Cliente());

class Pruduct {} //ECMESCRIPT 2015 (ES6) permite isso ai
console.log(typeof Pruduct);  // Class é só uma function sugar
console.log(typeof new Pruduct());