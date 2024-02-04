// Strings tem indices      
         //   01234..
const nomes = ['Gabriel', 'Roberto', 'Bento'];

// for clássico (Array ou Strings)

for(let i = 0; i < nomes.length; i++ ) {
    console.log(nomes[i]);

}

console.log(`--------`);

// for in (strings, array ou objetos)

for (let i in nomes) {
    console.log(nomes[i]);


}

console.log(`--------`);

// for of (retorna o valor em si, arrays ou strings)

for(let valor of nomes) {
    console.log(valor);

}

console.log(`--------`);

// forEach

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);

});



