const t = window.document.getElementsByClassName('titulo')[0];
const c = window.document.getElementsByClassName('container')[0];


t.innerHTML = `Olá Mundo`;
t.style.background = `white`;
t.style.textAlign = `center`;
t.style.margin = `0`;
t.style.padding = `0`;
t.style.boxShadow = `3px 3px 3px black`;

c.innerHTML = `conteúdo principal`;
c.style.marginTop = `50px`;
c.style.background = `white`;
c.style.textAlign = `center`;

window.document.body.style.background = `lightGray`;


