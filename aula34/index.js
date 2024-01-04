/*
// atribuição via desestruturação
let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];

// v desestruturação      
 [a, b, c]       =        letras;

 console.log(a, b ,c);

 */

/*

// o resto vai pegar todos os outros indices que não foram usados.

 const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 const [primeiroNumero, segundoNumero, ...resto ] = numeros;

 console.log(primeiroNumero, segundoNumero, ...resto);


*/

const numeros = [
 // v indice 0   v indice 1   v indice 2
  // 0  1  2    0  1  2    0  1  2
    [1, 2, 3], [4, 5, 6], [7, 8, 9]

]

console.log(numeros[2][2]);








