const res = document.getElementById(`res`);

// array com objetos dentro..
const elementos = [
{tag: 'p', texto: 'Um texto qualquer' },
{tag: 'div', texto: 'frase 2'},
{tag: 'section', texto: 'frase 3' },
{tag: 'footer', texto: 'frase 4' },



];

const container = window.document.querySelector(`#container`);

const div = document.createElement(`div`);

for(let i = 0; i < elementos.length; i++) {

    let { tag, texto, } = elementos[i];
    const tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);


    
}

container.appendChild(div);


