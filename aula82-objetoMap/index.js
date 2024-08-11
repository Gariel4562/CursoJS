const pessoas = [
    {id: 3, nome: 'Gabriel'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'João'},
]

const novasPessoas = new Map();

for(const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});

}

novasPessoas.delete(2);

console.log(novasPessoas); // Deleta uma pessoa

console.log(novasPessoas.get(2)); // não mostrará a pessoa dois pois, deletei ela.
