// métodos que ajudam a trabalhar melhor com promises

function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min ) + min );

}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na Promise');

        }, tempo);

    })


}

// Promise.all, Promise.race, Promise.resolve, Promise.reject

// all resolve todas as promises.
// race resolve a primeira promise que encontrar.
// resolve, ela resolve a promise.
// reject rejeita a promise que deu erro.

const Promises = ['primeiro valor',
    esperaAi('Primeira promise.', 3000),
    esperaAi('Segunda promise.', 500),
    esperaAi('Terceira promise.', 6000),
    'outro valor'
];

Promise.race(Promises).then(function(valor) {
    console.log(valor);

}).catch(function(erro) {
    console.log(erro);

})

