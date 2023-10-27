
//                 0          1        2      3        4
const alunos = ['Flavio', 'Bruno', 'Joyce', 'Anne', 'Lucy']; // < Isso é um Array, vários valores dentro de uma variável.

const alunosIdade = [9, 10, 9, 10, 11]; // Array com a idade dos alunos

console.log(alunos); // Array completo
console.log(alunos[4], alunosIdade[4]); // acessando pelo indice para descobrir nome e idade de cada um.

alunos[0] = 'Katy', alunosIdade[0] = 13;  // para fazer uma alteração no array.

console.log(alunos, alunosIdade); // se executar novamente terá o nome alterado.

alunos[5] = 'Flavio', alunosIdade[5] = 9; // adicionando outro aluno. se o indice não existir, ele será criado.

console.log(alunos, alunosIdade); // se executar novamente o aluno aparecerá.

console.log(alunos.length) // descobrir tamanho do array

alunos.push('Gabriel'), alunosIdade.push(10); // Adiciona aluno e idade no final do array.

console.log(alunos, alunosIdade);

alunos.unshift('Luana'), alunosIdade.unshift(16); // Luana será indice 0 no lugar da Katy, essa função adiciona no começo.

console.log(alunos, alunosIdade);

alunos.pop(), alunosIdade.pop(); // remove um aluno e o indice do final.

console.log(alunos, alunosIdade); // já sem o Gabriel.

alunos.shift(), alunosIdade.shift(); // remove um aluno do inicio.

console.log(alunos, alunosIdade); // Já sem Luana

console.log(alunos.slice(0, 3), alunosIdade.slice(0, 3)); // ele vai fatiar a parte que quero para me mostrar.

console.log(typeof alunos, typeof alunosIdade); // arrays são considerados um objeto











