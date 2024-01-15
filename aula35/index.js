// Objeto dentro de Objeto, Objeto Pessoa, e dentro do Objeto pessoa o endereço da pessoa.

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Soares',
    idade: 28,
    endereco: {
        rua: 'Av brasil',
        numero: 320,


    }


}

// Atribuição via desestruturação 

const  { nome = '', sobrenome, idade } = pessoa;

console.log(nome, sobrenome, idade);

