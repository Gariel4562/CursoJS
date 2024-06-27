// defineProperty - defineProperties (Congelar o objeto que quer congelar.) o primeiro congela uma por uma, a segunda congela várias de uma vez.

function Produto(nome, preco, estoque) {
   // this.nome = nome;
   // this.preco = preco;
    

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // O Valor não pode ser alterado, estou dizendo ao programa para não alterar o valor do estoque. então, se eu tentar mudar o valor do estoque para 50000, ele continuará 3.
        configurable: false, // dar permissão ou não para Reconfigurar a chave. ou seja... se eu tentar apagar o valor, ele mesmo assim continuará.






    });

    Object.defineProperties(this, {
        nome: {

        enumerable: true, // mostra a chave
        value: nome, // valor
        writable: true, // O Valor não pode ser alterado, estou dizendo ao programa para não alterar o valor do estoque. então, se eu tentar mudar o valor do estoque para 50000, ele continuará 3.
        configurable: true, // dar permissão ou não para Reconfigurar a chave. ou seja... se eu tentar apagar o valor, ele mesmo assim continuará.

        },

        preco: {

        enumerable: true, // mostra a chave
        value: preco, // valor
        writable: true, // O Valor não pode ser alterado, estou dizendo ao programa para não alterar o valor do estoque. então, se eu tentar mudar o valor do estoque para 50000, ele continuará 3.
        configurable: true, // dar permissão ou não para Reconfigurar a chave. ou seja... se eu tentar apagar o valor, ele mesmo assim continuará.
            
        }


    })

}

const p1 = new Produto('Camiseta', 20, 3);

console.log(p1);

for(let chave in p1) {
    console.log(chave);


}



