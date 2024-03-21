  // Algumas maneiras de declarar funções.
  
  // Declaração de função (function hoisting) com isso posso chamar a função antes ou depois que não terá problema.

  falaOi();

  function falaOi() {
    console.log('Oi');

  }


  // first-class objects (objetos de primeira classe. ) uma constante recebe uma função como dado. function expression


  const souUmDado = function () {

    console.log('Sou um Dado!');


  }

  souUmDado(); // posso executar a constante que o função aparecerá normalmente.

  // Essa é uma função para executar outras funções ou seja... crio uma função que pode executar outras, nesse caso a função executou a função "sou um dado" feita anteriormente.

  function executaFuncao(funcao) {
    funcao();

  }

  executaFuncao(souUmDado);

  // arrow functions 

  const funcaoArrow = () => {
    console.log('Sou uma arrow function. ')
  }

  funcaoArrow();

  // dentro de um objeto

  const obj = {

    falar: function() {
        console.log('Estou falando!');

    }

  }

  obj.falar();


  // Todas essas funções são tratadas como Objetos de primeira classe.







 