const p = document.querySelector(`.paragrafos`);
const ps = p.querySelectorAll(`p`);

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for(let p of ps) {

    p.style.background = backgroundColorBody;

}





