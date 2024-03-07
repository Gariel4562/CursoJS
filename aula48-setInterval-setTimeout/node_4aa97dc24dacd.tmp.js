// mostra a hora atual porém não atualiza.

function mostraHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


// vai atualizar a cada 1 segundo com o setInterval

setInterval(function () {
    console.log(mostraHora());
}, 1000); 




