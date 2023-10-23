// IEEE 754-2008, se eu estiver fazendo contas com valores pequenos, posso me deparar com alguns problemas de numeros quebrados, e para resolver isso tenho que fazer isso:

let num1 = 0.7; //number
let num2 = 0.1; //number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

num1 = Number(num1.toFixed(2)); // vai ajeitar o problema dos valores quebrados.

console.log(Number.isInteger(num1)); // inteiro ou não?

console.log(num1.toFixed(1)); // aqui vai quantas casas eu quiser colocar, se 0 vai só 1 numero, se 1 vai só 2 em.. 1.0 e etc..

/*

console.log(num1.toString() + num2); //
console.log(typeof num1); // < nesse exemplo ele vai juntar o num1 ( que virou string temporariamente com o num2 (que é tipo numero.) )

console.log(num1.toString(2)); // < representação bin.
console.log(num1.toFixed(2)) // < escolhe o tanto de casas que os numeros terão, "resume" numeros muito grandes.
console.log(Number.isInteger(num1)); // vai retornar verdade ou falso, se o numero for um inteiro será verdadeiro, se não for inteiro, será falso..

let temp = num1 * 'ola'; 
console.log(temp); // < aparecerá um NaN pois, não tem como fazer essa conta num1 * 'ola';
console.log(Number.isNaN(temp)); // < vai dizer se a variavel possui um NaN, se possuir dará verdadeiro, se não possuir, dará falso.

*/




















