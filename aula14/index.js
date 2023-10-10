// 0123456789 10... o U começa em 0. quando o espaço não existir ex... 15, ele apontará Undefined ou seja... não apontará pra local nenhum na memoria.

let umaString = "Um \"texto\" ";

console.log(umaString[9]); // acha o numero do espaço que está a letra da string.
console.log(umaString.charAt(12)); // ele funciona de forma parecida do primeiro, porém se a string não existir naquele espaço pedido ele simplesmente vai retornar vazio e não erro.



console.log(umaString.concat('em', ' ', 'um', ' ', 'lindo', ' ', 'dia')); // concatena umaString + valor concatenado.

console.log(`${umaString} em um lindo dia `) // com templates string. normalmente uso essa forma.
console.log(umaString.indexOf('texto')); // ele vai achar o indice que está a palavra.

console.log(umaString.match(/[a-z]/g)) // expressão regular
console.log(umaString.length) // mostra o tamanho da String.
console.log(umaString.slice(3, 10)) // fatia a palavra de acordo com o que eu quiser ex.. 3, 10
console.log(umaString.split(' ')) 
console.log(umaString.toLocaleUpperCase ()) // Letras maiusculas.
console.log(umaString.toLocaleLowerCase ()) // Letras minusculas.


