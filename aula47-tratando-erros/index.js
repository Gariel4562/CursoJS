function soma(x, y) {

    if(typeof x !== 'number' || typeof y !== 'number') {

        throw new Error('x e y precisam ser números'); // vai ocorrer o erro se digitar uma string no lugar do número.

    } 

    return x + y; // soma de x + y


    

    

} 

// bloco try ele vai tentar, e se ele não conseguir ele ativará o catch de erro (error) e dará erro.
// Se x e y não forem number lançaremos um erro.

try {

    console.log(soma(1, 2)); // console mostra, e o valor soma recebe 2 números que serão somados.
    console.log(soma('1', 2)); // se eu mandar em string o erro do throw ocorrerá.  

} catch(error) {

   console.log(error);

}


