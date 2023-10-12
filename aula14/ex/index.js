const nomeCompleto = String(window.prompt(`Digite o seu nome completo: `));

// donzão

let c = document.getElementsByClassName(`corpo`)[0];

c.innerHTML = `Seu nome é ${nomeCompleto}.`;
c.innerHTML += `<br>Seu tem nome ${nomeCompleto.length} letras.`;
c.innerHTML += `<br>A segunda letra do seu nome é: ${nomeCompleto.charAt(1)} `;
c.innerHTML += `<br>Qual o Primeiro indice da letra a no seu nome: ${nomeCompleto.indexOf('a')} `;
c.innerHTML += `<br>Qual o Ultimo indice da letra a no seu nome: ${nomeCompleto.lastIndexOf('a')} `;
c.innerHTML += `<br>As ultimas três letras do seu nome são: ${nomeCompleto.slice(-3)} `;
c.innerHTML += `<br>As palavras do seu nome são: ${nomeCompleto.split(' ')} `;
c.innerHTML += `<br>Seu nome com letras maiusculas: ${nomeCompleto.toLocaleUpperCase()} `;
c.innerHTML += `<br>Seu nome com Letras minusculas: ${nomeCompleto.toLocaleLowerCase()} `;






