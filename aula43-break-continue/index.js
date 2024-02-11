const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros) {
    if(numero === 2 || numero === 5) {
        console.log(`Pulei o 2 ou o 5 `)
        continue; // nesse caso o continue vai pular o 2 pois, quando for 2 ele simplesmente continuará.

    }

    if(numero === 7) {
        console.log(`parei por aqui`)
        break; // o Break vai encerrar, quando o número for igual a 7 ele simplesmente encerrará.

    }



    console.log(numero);

}

