{ 
    { 
        { 
            { 
                var light = 'dark';
                console.log(light);
            } 
        } 
    } 
}
console.log(light);         // COMO OS BLOCOS NÃO SÃO UMA FUNÇÃO, ENTÃO O ESCOPO É GLOBAL

function chato() {
    var legal = 'é bom ?';
    console.log(legal);
}

chato();
console.log(legal);         // AQUI A VAR NÃO FUNCIONA, PORQUE O ESCOPO É LOCAL, OU SEJA, NÃO É VISÍVEL NO OBJETO WINDOW
