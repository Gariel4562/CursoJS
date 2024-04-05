// escopo léxico Ela reconhece tudo que está dentro dela e nos "vizinhos" dela.
const nome = 'Gabriel';

function falaNome() {
    

    console.log(nome);

}

function usaFalaNome() {
    const nome = 'Soares';
    falaNome();

}

usaFalaNome();

// essa função lembra onde foi declarada e quais os vizinhos dela.
