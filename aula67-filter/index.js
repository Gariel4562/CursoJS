// filter para filtrar o Array, ou seja... se quiser números acima de 10 ele irá procurar e me trazer esses números.


const numeros = [5, 50, 60, 40, 70, 1, 2, 7, 30, 65, 90, 100]; // Arrays com todos os números

   function callbackFilter(valor) {
    if(valor > 10) {

        return true;

    } else {

        return false;

    }


   } // Aqui se o valor for maior que 10 então ele vai adicionar no array que aparecerá no console senão for, ele será excluido do array que aparecerá no console.

const numerosFiltrados = numeros.filter(callbackFilter);

console.log(numerosFiltrados);


