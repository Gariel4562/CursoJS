function calcularIMC() {

    // capturando tags do html para js

   const res = window.document.querySelector(`#res`);
   let peso = document.getElementById(`peso`);
   let altura = document.getElementById(`altura`);

   // conversão 

   p = Number(peso.value);
   a = Number(altura.value);

   // condição de erro, se não der erro ele segue normalmente.

   if(p === 0 || a === 0) {
    window.alert(`Digite todas as informações `);

   } else {

    let imc = p / (a * a);

    res.innerHTML = `O seu IMC é ${imc.toFixed(1)}. `;

    // Avaliar

    if(imc < 18.5) {
        res.innerHTML += `<br><br>Você está abaixo do Peso!`;

    } else if(imc >= 18.5 && imc <= 25) {
        res.innerHTML += `<br><br>Seu peso está normal!`;

    } else if(imc >= 25 && imc <= 30) {
        res.innerHTML += `<br><br>Você está no sobrepeso.`;

    } else if(imc >= 30 && imc <= 35) {
        res.innerHTML += `<br><br>Você está Obesidade Grau 1 `;

    } else if(imc >= 35 && imc <= 40) {
        res.innerHTML += `<br><br>Você está Obesidade grau 2 `;

    } else if(imc >= 40) {
        res.innerHTML += `<br><br>Você está Obesidade grau 3 `;
    }

    // condição de erro 2

    if(imc <= 7 || imc >= 300) {
        window.alert(`Um ser humano não sobreviveria com esse IMC.`);

    }

    








   }








}



