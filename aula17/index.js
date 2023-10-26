let num1 = Number(window.prompt(`digite o seu numero: `)); // Vai receber o numero que eu digitar.

   // essas variáveis recebem o id do HTML, e serão usadas para imprimir o valor na tela.

   const t = window.document.getElementById(`titulo`);
   
   const r = window.document.getElementById(`raiz`);
   
   const i = window.document.getElementById(`inteiro`);
   
   const n = window.document.getElementById(`n`);
   
   const b = window.document.getElementById(`baixo`);
   
   const c = window.document.getElementById(`cima`);
   
   const d = window.document.getElementById(`decimais`);

    // variáveis criadas receberão o valor que eu colocar no num1 e farão determinadas funções.

    t.innerHTML = `O seu numero é ${num1}. `;
    r.innerHTML = `raiz quadrada: é ${num1 ** 0.5}.`; // pra fazer a conta direto posso fazer a operação dentro dos {}.
    i.innerHTML = `O numero é inteiro? ${Number.isInteger(num1)}. `;
    n.innerHTML = `O numero é NaN? ${Number.isNaN(num1)}.`;
    c.innerHTML = `O numero arredondado para cima é ${Math.ceil(num1)}. `
    b.innerHTML = `O numero arredondado para baixo é ${Math.floor(num1)}. ` 
    d.innerHTML = `Com duas casas decimais: ${num1.toFixed(2)}`











