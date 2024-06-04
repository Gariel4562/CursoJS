// Doble os Números. 
// map usa o valor do array original para gerar um novo array. map vai ter sempre o mesmo tamanho do array original, diferente do Filter que pode remover parte dele.
//               0    1   2  3    4   5

const numeros = [10, 20, 30, 50, 40, 60, 80, 90, 100];
const numerosEmDobro = numeros.map(function(valor, indice, array) {

    console.log(valor * 2, indice, array); // para dobrar o valor do array é só dobrar o valor "valor * 2"

});

console.log('Exemplo 2 v');


// para cada elemento
// retorne apenas uma string com o nome da pessoa
// remova apenas a chave nome do objeto
// adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Gabriel', idade: 28},
    {nome: 'Maria', idade: 38},
    {nome: 'Quiterinha', idade: 45},
    {nome: 'Jorgina', idade: 51},
    {nome: 'Betão', idade: 43},
    {nome: 'Carlos', idade: 21},

];

const nomes = pessoas.map(function(valor) {

    return valor.nome;

});

const idades = pessoas.map(function(obj){
// delete obj.nome; // remove chave nome.
    return obj;


});

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj };
    newObj.id = indice;
    return newObj;

});

console.log(pessoas); // objeto original

console.log(nomes); // apenas nomes

console.log(comIds); // Objeto com os Ids



