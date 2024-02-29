//fizzBuzz

function fizzBuzz(numero) {

    if(typeof numero !== 'number') {
        return numero; 

    } 

    if(numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';

    } // se o numero for divisivel por 3 e 5, vou retornar FizzBuzz

    if(numero % 3 === 0) {
        return 'Fizz';

    } // se o numero for divisivel por 3 vou retornar Fizz

    if(numero % 5 === 0) {
        return 'Buzz';

    } // se o numero for divisivel por 5 vou retornar Buzz

    return numero; // se o número não for divisivel nem por 3 e nem por 5, ele vai retornar o Número.
     

}

console.log('a', fizzBuzz('a'))
for(let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));

}