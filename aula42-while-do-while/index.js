function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);

}

const min = 1;
const max = 50;
let rand = random(min, max);

// enquanto rand for diferente de 10 o programa continuará produzindo números... só irá parar quando chegar no 10. while primeiro checa, e depois faz.

while(rand !== 10) {
    rand = random(min, max);
    console.log(rand);

}

// já o do while ele faz primeiro e depois checa. ex...

console.log(`----------------------------`);

let idade = 18;

do {
    console.log(idade);
    idade++
} while (idade <= 30); 



