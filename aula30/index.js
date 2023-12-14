// função date é uma função construtora

const tresHoras = 60 * 60 * 3 * 1000; // vai acrescentar 3 horas.
const umDia = 60 * 60 * 24 * 1000; // acrescenta mais um dia.

const data = new Date(0 + tresHoras + umDia); // função construtora começa sempre com uma letra maiúscula. 0 mostrará a data do marco 0 por volta de 31/12/1969. se tirar o 0 mostrará a data de momento.

console.log('dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());

console.log(data.toString()); // mostrará data


