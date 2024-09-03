function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);

}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad Value');

        setTimeout(() => {
            
            resolve(msg);

        }, tempo);
    }); // resolve = codigo executado com sucesso então resolve ele para mim, reject = Codigo deu errado então, rejeita ele para mim.
    


}


esperaAi(22222, rand(1, 3)).then(resposta => {
    console.log(resposta);
    return esperaAi('frase 2', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi('frase 3', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).catch(e => {
    console.log('Erro', e);
}); // o then será executado assim que a gente resolver a promise. e quando chamar reject outro metodo será executado que é o Catch, para capturar o erro.

console.log('isso será exibido antes de qualquer um');

// Se a frase 1 não for uma String (como está acontecendo nesse caso), o catch será chamado e comunicará o erro no console, se o frase 1 for uma string, então, apenas os thens serão chamados.

