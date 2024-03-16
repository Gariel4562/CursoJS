const relogio = window.document.querySelector(`.relogio`);

const iniciar = window.document.querySelector(`.iniciar`);
const pausar = window.document.querySelector(`.pausar`);
const zerar = window.document.querySelector(`.zerar`);
let segundos = 0;
let timer;

// Essa Função criará a hora dos segundos.

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'UTC'

    });

}

// Essa função iniciará o relógio quando eu apertar o botão.

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);

    }, 1000);

}


// Você clica e ele chamará as funções.

iniciar.addEventListener(`click`, function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
 
});

pausar.addEventListener(`click`, function(event) {
    clearInterval(timer);
    relogio.classList.add('pausado');

});

zerar.addEventListener(`click`, function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = `00:00:00`;
    segundos = 0;

} );
