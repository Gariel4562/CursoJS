// Funções de Callback ou seja... ele ocorrerá quando uma Ação finalizar.

function rand(min = 1000, max = 3000) { 
const num = Math.random() * (max - min) + min;
return Math.floor(num) // Fará numeros aleatórios

}

// Funções com números aleatórios, e o que aparecerá dentro.

function f1 (callback) {
    setTimeout(function() {
        console.log('f1');
        if(callback) callback();


    }, rand());
}

   function f2 (callback) {
    setTimeout(function() {
        console.log('f2');
        if(callback) callback();


    }, rand());

   }

function f3 (callback) {
    setTimeout(function() {
        console.log('f3');
        if(callback) callback();


    }, rand());
}

// v Essa "Escadinha" vai organizar a ordem que cada função aparecerá.

f1(function() {
    f2(function() {
        f3(function() {

            console.log('Olá Mundo!');

        });
    });
});






