// exercicio

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varTemp = varA; // para o Valor não se perder amarzenei o valor de A aqui.
varA = varB;
varB = varC;
varC = varTemp; // e o valor armazenado usei aqui.

console.log(`O resultado é ${varA}, ${varB}, ${varC}. `);





