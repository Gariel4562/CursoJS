// serão usados os seguintes códigos

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, ''); // tudo que não for um número será substituido por nada, os pontos e hífen serão retirados e os números se juntarão porém, continua sendo uma string.
cpfArray = Array.from(cpfLimpo); // converter string para array para poder utilizar reduce, map e etc..

console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0)); // conversão string para number.




