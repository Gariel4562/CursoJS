const idade = 30;
const nome = 'Luiz';
const sobreNome = 'Otávio Miranda';
const peso = 84;
const alturaEmCm = 1.8;
let imc;
let anoNascimento = 1993;

imc = peso / (alturaEmCm * alturaEmCm); // calculo para achar IMC
anoNascimento = 2023 - idade; // Calculo para achar o ano de nascimento

console.log(`${nome} ${sobreNome} tem 30 anos e pesa ${peso} kg, tem ${alturaEmCm} de altura, e seu imc é ${imc}. nasceu no ano de ${anoNascimento} `);




