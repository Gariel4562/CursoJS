// Argumentos que sustentam todos os argumentos enviados

function funcao() {
    let total = 0;
    for(let argumento of arguments) {
        total += argumento;

    }
    console.log(total);

}

funcao(1, 2, 3, 4, 5, 6, 7); // vai Somar tudo.

// function a, b, c , d

function funcao(a, b, c, d, e ,f) {

    console.log(a, b, c, d, e, f);

}

funcao(1, 2, 3, 4, 5, 6);

// resto

const conta = (...args) => {
    console.log(args);



};

conta('+', 1, 20, 30, 40, 50);

