/* Bom dia, Boa tarde, Boa Noite. posso ter vários else if, e um else no final. */


const hora = 1;

if(hora >= 1 && hora <= 12) {
    console.log(`Bom Dia!`);

} else if(hora >= 13 && hora <= 18) {
    console.log(`Boa Tarde!`);

} else if(hora >= 19 && hora <= 24) {
    console.log(`Boa Noite!`);

} else {
    console.log(`Horário inválido`);

} // Nesse caso o Else é padrão ou seja... ele vai mandar mensagem 'reclamando' se a hora for inválida ex.. hora 25.



