// função construtora => objetos 
// função fabrica => objetos.
// construtora iniciar o nome com letra maiuscula ex.. Pessoa


// função construtora, quando usar a função construtora tenho que usar a palavra new.

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;



}

const p1 = new Pessoa('Gabriel', 'Lima');
const p2 = new Pessoa('Kaio', 'Milton');

console.log(p2.nome);



