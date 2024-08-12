// classes em JS é idêntica a função construtora.

class Pessoa {
    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;

    }

    // v Métodos

    falar() {
        console.log(`${this.nome} está falando. `);


    }

}

// instanciar é criar um objeto a partir da class

const p1 = new Pessoa('Gabriel', 'Soares');
const p2 = new Pessoa('Maria', 'Dos Santos');
const p3 = new Pessoa('João', 'Da Silva');

console.log(p2.falar());

