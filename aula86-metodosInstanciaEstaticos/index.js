class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;

    }

    // v Métodos de instância

    aumentarVolume() {
        this.volume += 2;

    }

    diminuirVolume() {
        this.volume -= 2;
        
    }

    // v Método estático, métodos estáticos não tem acesso aos dados dos métodos da instância.

    static trocaPilha() {
        console.log('Ok, trocando..');

    }
}

const controle1 = new ControleRemoto('LG');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

controle1.diminuirVolume();

console.log(controle1);

ControleRemoto.trocaPilha();


