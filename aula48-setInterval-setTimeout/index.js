// v mostra a hora atual porém não atualiza.

function mostraHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


// v vai atualizar a cada 1 segundo com o setInterval.

const timer = setInterval(function () {

    console.log(mostraHora());

}, 1000); 

// v vai parar quando der 10 segundos.

setTimeout(function() {
   
    clearInterval(timer);

}, 10000); 



// obs: setInterval conta de segundo a segundo, e o setTimeout encerra esse processo, só será executado uma vez, enquanto o setInterval será executado várias.


