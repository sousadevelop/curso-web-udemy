//OBJETO e JSON são coisas diferentes !!
//JSON são notações textuais parecidas com OBJETOS

const produto1 = {};
produto1.nome = 'Ryzen Ultra';
produto1.preco = 5098.45;
produto1['Desconto TOP'] = 0.25; // evitar atributos com espaço

console.log(produto1);

const produto2 = {
    nome: 'Intel Over',
    preco: 4221.95,
    obj: {
        quantidade: 1565,
        obj: {
            potencia: 6.0
        }
    }
}

console.log(produto2);

// { "nome": "Promisse", "value": 1 } // EXEMPLO DE FORMATO JSON VÁLIDO