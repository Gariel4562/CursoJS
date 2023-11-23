/*
falsy
*false
0
''
""
``
null
undefined
NaN
*/

function falaOi() {
    return 'oi';

}

let vaiExecutar = 'Gabriel'; // se tiver um valor verdadeiro, a função Oi será executada. nesse caso o valor é verdadeiro.

console.log(vaiExecutar && falaOi()); // se for valor verdadeiro retornará oi na tela, se for um valor falso não retornará nada. 

console.log(0 || false || null || 'Gabriel' || true); // ele vai retornar o primeiro valor verdadeiro que encontrar no caso é o 'Gabriel' se todas forem falsas, a última falsa será retornada.




