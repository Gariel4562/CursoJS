// IIFE -> Immediately invoked function expression

(function() {
    const nome = 'Gabriel';
    console.log(nome);

})(); // Cria a função e chama ela imediatamente, ela não interfere no escopo global.

// v o console global imprimirá a variável global. já a função acima vai imprimir o que está dentro dela.

const nome = 'garielzao'; 

console.log(nome);


