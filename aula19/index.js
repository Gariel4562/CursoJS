// funções executam ações, é um trecho de código que executa alguma ação.
/* 
function contar() {

    let c = 9;

    if(c <= 5) {

    for(c == 0; c <= 10; c++) {
        

        console.log(`${c}`)

    }

    }

    else {

    for(c == 0; c >= 0; c--) {
        console.log(`${c}`)
    }

  }

  if(c == -1) {
    console.log(`a função zerou!`);



  }

  if(c == -1) {

    while(c <= 15) {
        console.log(c);
        c++;
    }

  }




}

contar(); // chamando a função para mostrar na tela

*/

// função de calculo v

function soma(x = 1, y = 1) {

    const resultado = x + y;
    return resultado; // tudo que está abaixo de um return não é mais executado
    console.log(`Boa Noite`) // < não será executado por causa do return
    


} // o que está dentro dessa função está protegido ou seja... se eu tentar executar "resultado" fora da função dará erro, só dará certo se eu chamar a função.

const resultado = soma(5, 20); // < se eu não colocar os dois numeros, ele vai pegar o valor padrão que coloquei na criação da função soma "soma(x = 1, y = 1)".
console.log(resultado);




// função raiz, função arrow function v

const raiz = n => n ** 0.5 // descobrir raiz quadrada


 // < nesse caso tenho que colocar ; no final

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));








