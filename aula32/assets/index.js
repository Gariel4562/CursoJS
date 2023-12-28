const a = window.document.querySelector(`#area`);

let = dataHora = new Date(); // Vai buscar a data exata do momento.


let minutes = dataHora.getMinutes(); // Busca os Minutos.

let horas = dataHora.getHours(); // Busca as Horas.

let diaSemana = dataHora.getDay(); // Busca o dia da semana

let diaMes = dataHora.getDate(); // Busca apenas o Dia do mês.

let mesDoAno = dataHora.getMonth() + 1; // Busca o Mês do ano, como começa em 0 temos que adicionar mais 1.
let ano = dataHora.getFullYear(); // Busca o ano.

function zeroAEsquerda (num) { 

    return num >= 10 ? num : `0${num}`; // colocar Zero a esquerda na hora

}


  switch(diaSemana) {
    case 0: 
         a.innerHTML = `<h1>Hoje é Domingo, Dia ${diaMes} do mês ${mesDoAno} de ${ano}, nesse momento são ${zeroAEsquerda(horas)}:${zeroAEsquerda(minutes)}.  </h1>  `;
         break;

    case 1: 
         a.innerHTML = `<h1> Hoje é Segunda, Dia ${diaMes} do mês ${mesDoAno} de ${ano}, nesse momento são ${zeroAEsquerda(horas)}:${zeroAEsquerda(minutes)}.  </h1>   `;
         break;

    case 2: 
         a.innerHTML = `<h1> Hoje é Terça, Dia ${diaMes} do mês ${mesDoAno} de ${ano}, nesse momento são ${zeroAEsquerda(horas)}:${zeroAEsquerda(minutes)}.  </h1>  `;
         break;

    case 3: 
         a.innerHTML = ` <h1> Hoje é Quarta, Dia ${diaMes} do mês ${mesDoAno} de ${ano}, nesse momento são ${zeroAEsquerda(horas)}:${zeroAEsquerda(minutes)}.   <h1/>  `;
         break;
    
    case 4: 
         a.innerHTML = ` <h1> Hoje é Quinta, Dia ${diaMes} do mês ${mesDoAno} de ${ano}, nesse momento são ${zeroAEsquerda(horas)}:${zeroAEsquerda(minutes)}.  </h1>  `;
         break;

    case 5: 
         a.innerHTML = ` <h1> Hoje é Sexta, Dia ${diaMes} do mês ${mesDoAno} de ${ano}, nesse momento são ${zeroAEsquerda(horas)}:${zeroAEsquerda(minutes)}.  </h1>  `;
         break;

    case 6: 
         a.innerHTML = ` <h1> Hoje é Sábado, Dia ${diaMes} do mês ${mesDoAno} de ${ano}, nesse momento são ${zeroAEsquerda(horas)}:${zeroAEsquerda(minutes)}. </h1>    `;
         break;

    default:
        window.alert(`erro!`);
        break;
  }