// Objeto literal

const pessoa = {
    nome: 'Gabriel',
    sobreNome: 'Soares',
    idade: 28,

}

console.log(pessoa.nome); 
console.log(pessoa.sobreNome);




// Objeto construtor

const pessoa2 = new Object();
pessoa2.nome = 'Gabriel';
pessoa2.sobreNome = 'Soares';

console.log(pessoa, pessoa2); // acessando os dois arrays.

// Factory functions 

function criaPessoa(nome, sobreNome) {
    return {
        nome,
        sobreNome, 
        nomeCompleto() {
            return `${this.nome} ${this.sobreNome}. `;

        }

    }
}

const p1 = criaPessoa('Gabriel', 'Soares');

console.log(p1.nomeCompleto());

// Constructor functions 


function Pessoa3(nome, sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;

}

const p3 = new Pessoa3('Ricardo', 'Neto');

console.log(p3)

