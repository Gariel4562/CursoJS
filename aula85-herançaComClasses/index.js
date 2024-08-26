// Herança o "FILHO" Herda do Pai. no caso o DispositivoEletronico é o Pai de Smartphone e Tablet e ambos herdam do DispositivoEletronico.

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false; // true pra ligado e false para desligado.


    }

    ligar() {
        if(this.ligado ) {
            console.log(`${this.nome} já ligado `);
            return;
        }

        this.ligado = true;

    }

    desligar() {

        if(!this.ligado ) {
            console.log(`${this.nome} já desligado `);
            return;
        }

        this.ligado = false;

    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // chama o construtor da classe Pai.
        this.cor = cor;
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;

    }

    ligar() {
        console.log('Olha, você alterou o método ligar.')
    }
}

const s1 = new Smartphone('Samsung', 'preto', 'S10');

console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();




