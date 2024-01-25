const frutas = ['Pera', 'Banana', 'Abacaxi', 'Laranja' ];

// v for clássico

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);

} // ele vai acessar cada uma das frutas.




// v agora for com for in. for in -> Lê os indices ou chaves do objeto.

for(let i in frutas) {
    console.log(frutas[i]);


}