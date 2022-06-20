function tratandoErroELancar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    
    throw 'Aqui eu lanço um aviso para o usuário de que deu ruim.';
}

function avisoPerigo(obj) {
    try {
        console.log(obj.avisa.toUpperCase(), '!!');
    } catch (e) {
        tratandoErroELancar(e)
    } finally {                     // O finally será lançado caso dê erro ou não | Seu uso é opcional
        console.log('HAKI LIBERADO!!');
    }
}

const obj = { aviso: 'VIOL' };
avisoPerigo(obj);