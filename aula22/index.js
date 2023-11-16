function verification () {
    const res = window.document.querySelector(`#res`);
    let nome = document.getElementById(`nome`);
    let sobrenome = document.getElementById(`sobrenome`);
    let peso = document.getElementById(`peso`);
    let altura = document.getElementById(`altura`);

    let n = String(nome.value);
    let s = String(sobrenome.value);
    let p = Number(peso.value);
    let a = Number(altura.value);

    if(n.length == 0 || s.length == 0 || p == 0 || a == 0) {
        window.alert(`erro, digite todas as informações`);
        res.innerHTML = "";

    } else {
        res.innerHTML = `${n} ${s}, pesa ${p} kg, tem ${a} de Altura.`;
        let inform = [`Nome: ${n}, Sobrenome: ${s}, Peso: ${p}, Altura ${a}`];
        console.log(`${inform}`);







    }











}