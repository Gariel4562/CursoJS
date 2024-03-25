// return retorna um valor e termina a função.

function soma(a, b) {
    return a + b; // assim que retornar já termina a função, estou pedindo para a função me retornar a + b e ela fez justamente isso.

}

console.log(soma(5, 2));


// multiplicador e return

function criaMultiplicador(multiplicador) {

    return function (n) {
        return n * multiplicador;

    }

}

const duplica = criaMultiplicador(3);
const triplica = criaMultiplicador(2);
const quadriplica = criaMultiplicador(10);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));

