// Funções Geradoras

function* geradora1() {
    yield 'Valor1';
    yield 'Valor2';
    yield 'Valor3';

}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next()); // No Done vai aparecer true pois, todas as instruções foram realizadas. se quiser saber o valor tem que colocar "".value" no final.


// Geradora 2 infinita

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;

    }

}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);



