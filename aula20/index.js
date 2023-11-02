// Objetos básicos, quando for criar um Objeto em vez de colocar [] (que uso para funções), eu coloco as {} chaves. 
/*
const pessoa1 = {
    nome: `Gabriel`,
    sobrenome: `Soares`,
    idade: 28,
    




}; //  Objeto literal

const pessoa2 = {
    nome: `Jiraya`,
    sobrenome: `Hudson`,
    idade: 59,
    




}; //  Objeto literal

console.log(pessoa2.sobrenome); // para acessar um valor pessoa1.nome ou pessoa1.sobrenome e etc..
*/

// função para fazer objeto

/*

function criaPessoa (nome, sobrenome, idade) {

    return { nome, sobrenome, idade, };

}

const pessoa1 = criaPessoa('Gabriel', 'Soares', 28); // argumento (ex.. 'Gabriel' )é o valor passado para o parâmetro (ex.. nome)
const pessoa2 = criaPessoa('Maria', 'zinha', 31);
const pessoa3 = criaPessoa('Angelo', 'silva', 21);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);

*/

// quando uma função está dentro de um objeto é chamado de método.

const pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Soares',
    idade: 28,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`); // peguei o valor de nome e sobrenome e estou dizendo que ele disse oi.

    },

    incrementaIdade() {
        ++this.idade;

    }

}

pessoa1.fala(); // vai executar a função que está dentro do Objeto
pessoa1.incrementaIdade(); // vai acrescentar mais um ano de idade
pessoa1.fala(); // vai repetir com mais um ano de idade