const numero = 4;

  

if(numero <= 10) {
    console.log(`O Número é menor ou igual a 10. `);
} else {
    console.log(`O número é maior que 10. `)
}



if(numero >= 0 && numero <= 5) {
    console.log(`O Número está entre 0 a 5. `);

} else if(1 === 1) {
    console.log(`LITERAL!`); // se o Número for maior, esse bloco de código irá atrapalhar pois, ele vai verificar se o 1 é igual a 1, assim ele prejudicará quem vinher depois ou seja... mesmo se o número for 10, o programa não passará de 5 por causa dessa condição que destrói o bloco antes dele chegar no bloco de 6 a 10.

} else if(numero >= 6 && numero <= 10) {
  console.log(`O Número está entre 6 a 10. `); // Será executada essa condição (se não tiver o bloco LITERAL para atrapalhar.) pois, o atual número é 10.

} else {
    console.log(`O Número não está entre 0 a 5 e nem entre 6 a 10 `);

}

// Apenas uma condição desses blocos if, else if e else, será executada.. se o número for entre 0 a 5 o programa executará o primeiro bloco. se o número for entre 6 a 10 porém com o Literal antes do bloco de 6 a 10, irá verificar se o valor é literal e após fazer isso se encerrará. se não tiver literal e o valor for entre 6 a 10, o programa executará o terceiro bloco... se o número for maior que 10 então, o quarto bloco será executado.
