// factory function (função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, sobrenome, a, p,

        // função para criar nome completo com Getter
        get nomeCompleto() {
            return `${nome} ${sobrenome}`

        },

        // Setter

        set nomeCompleto(valor) {

            valor = valor.split(' ');
            this.sobrenome = valor.join(' ');
            console.log(valor);


        },

        fala: function(assunto) {
            return `${this.nome} está ${assunto}`; // o this vai se referir ao objeto que está chamando ele, que no caso é o p1

        },

        altura: a,
        peso: p,
        //Getter só para obter o valor.
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }


    }


}

const p1 = criaPessoa('Gabriel', 'Soares',  1.80, 75);
console.log(p1.fala('Falando sobre Js'));

p1.nomeCompleto = 'Gabriel S Lima';

console.log(p1.imc);
console.log(p1.nomeCompleto);



