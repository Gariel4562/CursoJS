// getOwnPropertyDescriptor

const produto = { nome: 'Produto', preco: 1.5 };

Object.defineProperty(produto, 'nome', {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 'Oi'


});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Ele vai me "dizer" se eu posso alterar o valor, ou se ele poderá ser exibido, ou se posso deletar a propriedade do meu Objeto.

console.log(produto.nome); // vai me mostrar o valor alterado pelo define que no caso é 'Oi'

// values mostra o valor sem a chave.

console.log(Object.values(produto));

// entries retorna chave, valor.

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);

}



