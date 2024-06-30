// getters e setters fazem o método da função simular que ele é uma propriedade. uma maneira de proteger a sua propriedade.

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
     
 
    let estoquePrivado = estoque;
     Object.defineProperty(this, 'estoque', {
         enumerable: true, // mostra a chave
         configurable: true, // dar permissão ou não para Reconfigurar a chave. ou seja... se eu tentar apagar o valor, ele mesmo assim continuará.
 
         

         get: function() {
            return estoquePrivado;

         }, // o trabalho do getter aqui é pegar o valor e te mostrar.
         set: function(valor) {

            if(typeof valor !== 'number') {
                console.log('bad value');
                return;

            } // O Set vai verificar se é número mesmo, se não for, ele dará erro, e se for ele vai atualizar com o novo número.

            
            estoquePrivado = valor;


         }
     });

     



    }

    const p1 = new Produto('Camiseta', 20, 3);
    

    for(let chave in p1) {
      console.log(chave);


    }

    //console.log(p1);
    
    p1.estoque = 500;
    console.log(p1.estoque);





