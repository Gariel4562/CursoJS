const _velocidade = Symbol('velocidade');



class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;

    }

    set velocidade(valor) {
        if(typeof valor != 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;


    }

    get velocidade() {
        return this[_velocidade];


    }

    acelerar() {
        if(this[_velocidade] >= 100) return; // se a velocidade for maior ou igual a 100, ela irá retornar.
        this[_velocidade]++;

        
    }

    freiar() {
        if(this[_velocidade] <= 0) return; // se a velocidade for menor ou igual a 0 ele não freiará mais.
        this[_velocidade]--;

    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
    c1.acelerar();

}

c1.velocidade = 2000; // não terá como alterar o valor da velocidade.

console.log(c1.velocidade);