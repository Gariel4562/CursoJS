// construtora => molde (classe) essa é uma Função v.

function Pessoa(nome, sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.nomeCompleto = () => this.nome + '' + this.sobreNome;


}

// instância são os Objetos que vem da função v.

const pessoa1 = new Pessoa('luiz', 'O.'); // < = Pessoa = função construtora.
const pessoa2 = new Pessoa('Maria', 'A.'); // < = Pessoa = função construtora.
const pessoa3 = new Pessoa('Gabriel', 'Soares.'); // < = Pessoa = função construtora.

const data = new Date(); // <= Date = função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(pessoa3);

console.dir(data);



