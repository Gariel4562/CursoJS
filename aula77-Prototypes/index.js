// Chave 'A', 'B' 'C' Estão todas dentro de C pois, o C passa por todos os outros.

// new Object -> Object.prototype
const objA = {

    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {

    chaveB: 'B'
    
}

const objC = new Object();
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

/* Fica assim: 

   objC o proto dele é o objB
   o proto do objB é o obgA
   e o proto do objA é o Object.prototype.



*/

console.log(objC.chaveC);

// com função

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));

}

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
    
}

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Caneca',
    preco: 15,
}

Object.setPrototypeOf(p2, Produto.prototype);

// p1.desconto(100);
p1.aumento(100);
p2.aumento(10);

console.log(p1);

console.log(p2);

const p3 = Object.create(Produto.prototype, {
    
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99,

    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42,

    }

});

p3.aumento(10);
console.log(p3);




