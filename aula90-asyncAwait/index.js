function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min ) + min );

}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na Promise');
            return;

        }, tempo);

    })


}
/* 

esperaAi('fase 1', rand()).then(valor => { console.log(valor);
return esperaAi('fase 2', )

}).then(fase => {
    console.log(fase);
    return esperaAi('fase 3', rand())
}).then(fase => {
    console.log(fase)
}).catch(e => console.log(e))

*/

//async vai permitir que eu utilize o await dentro de uma função, para então esperar uma promise ser finalizada.

async function executa() {

    try {
        const fase1 = await esperaAi('fase 1', rand());
        console.log(fase1);

        const fase2 = await esperaAi('fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('fase 3', rand());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);

    } catch(e) {
        console.log(e)
    }
    
}

executa();

// nesse caso o try é como se fosse o Then, e se der algum erro ele cai no catch que irá falar o erro.

/* v estados das promises v */

// pending -> promise pendente
// fullfilled -> promise resolvida
// rejected -> promise rejeitada