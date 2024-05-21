//                 0         1       2          3        4
 //               -5        -4      -3         -2       -1

const nomes = ['Gabriel', 'Maria', 'Julia', 'Gustavo', 'Pablo'];

const removidos = nomes.splice(4, 1, 'Kelly'); // Nesse caso estou pedindo para remover o indice 4 e somente ele, e depois adicionar a Kelly no lugar.

console.log(nomes, removidos); // Apenas o Pablo foi removido, como eu pedi.

// se quiser remover mais é só pedir para começar no indice 3 e remover 2 elementos ex... (3, 2); 




