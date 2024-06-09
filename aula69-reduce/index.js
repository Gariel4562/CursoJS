// Serve para reduzir o Array

const numeros = [5, 10, 20, 30, 40, 50, 90, 8, 70, 60, 45, 55, 53]


const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor; // com isso ele vai acumulando os valores até chegar em um total.
    return acumulador;

}, 0)

console.log(total);

// o Papel do Reduce é reduzir o valor de um array a um único elemento, igual no exemplo apresentado.

// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Gabriel', idade: 28}, // o Primeiro é o acumulador
    {nome: 'Jorge', idade: 21}, // como o valor 2 não é maior que o acumulador então o valor 1 continua sendo o acumulador.
    {nome: 'Maria', idade: 36}, // agora o valor 3 superou o acumulador 1, então o valor 3 passa a ser o acumulador.
    {nome: 'Kelly', idade: 44}, // aqui o acumulador 3 é superado pelo valor 4 e então o valor 4 passa a ser o acumulador.
    {nome: 'Valmor', idade: 45}, // aqui o acumulador 4 é superado pelo valor 5, então o valor 5 passa a ser o acumulador.

    // assim o mais velho acaba sendo o acumulador.
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade ) return acumulador;
    return valor;

}); 

console.log(maisVelha);



