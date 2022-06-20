const resultado = (nota) => {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quador de Honra');
            break;
        case 8: case 7:
            console.log('Aprovado');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação');
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reprovado');
            break;
    
        default:
            console.log('Nota inválida');
            break;
    }
}

resultado(9.2);
resultado(7);
resultado(4.9);
resultado(2);
resultado(-1);