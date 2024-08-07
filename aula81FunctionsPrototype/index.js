
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);

    },

};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);

    },
    

};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`)

    },
    

};


const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobreNome) {

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobreNome: {value: sobreNome}

    });

};


const p1 = criaPessoa('Gabriel', 'Soares');
const p2 = criaPessoa('John', 'Smith');
const p3 = criaPessoa('Maria', 'Skiner');

p1.beber();
