// uma Let não pode ser redeclarada no mesmo bloco, já a var pode.
// let tem escopo de bloco, var só tem escopo de função.

// se eu redeclarasse let no mesmo bloco ele daria erro, como redeclarei em outro bloco, não deu. já o var não respeita essa regra.

const verdadeiro = true;

let nome = 'Gabriel';
var nome2 = 'Otávio';


if(verdadeiro == true) {

    let nome = 'Gari'; 
    var nome2 = 'Carlos';
    

    
}

console.log(`${nome}, ${nome2}`); // Mesmo o var tendo um nome no mesmo bloco (Global), ele vai buscar a variavel que está dentro de outro bloco. já o let respeita e vai pegar o nome que está na mesma função dele.









