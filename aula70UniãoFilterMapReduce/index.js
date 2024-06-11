const numeros = [1, 5, 60, 80, 70, 90, 30, 65, 84, 98, 91];

const numerosPares = numeros.filter(function(valor) {
    return valor % 2 === 0; // Filter está pedindo os números pares.


}).map(function(valor) {
    return valor * 2; // Map está dobrando o valor.

}).reduce(function(ac, valor) {
    return ac + valor; // e então o Reduce está somando todos os números para assim criar a soma total de todos os números.


})

console.log(numerosPares);

