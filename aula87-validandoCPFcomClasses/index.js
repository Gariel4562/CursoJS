// 705.484.450-52 070.987.720-03

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')

        });

    }

    éSequência() {

        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; // ele vai repetir o primeiro caractere 11 vezes, e se isso for igual o cpfLimpo então, será uma sequência.

    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;

    }

    geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos) {
           // console.log(stringNumerica, typeof stringNumerica);

           total += reverso * Number(stringNumerica);
           reverso--;

        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';

    }
    
    valida() {
        if(!this.cpfLimpo) return false; // se não existir cpf limpo retornará falso.
        if(typeof this.cpfLimpo !== 'string') return false; // se CPF limpo for diferente de string retornará falso.
        if(this.cpfLimpo.length !== 11) return false; // se o CPF não tiver 11 caracteres então, dará falso.
        if(this.éSequência()) return false; // se éSequência for uma sequência então, retornará falso.
        this.geraNovoCpf();

        
        return this.novoCPF === this.cpfLimpo;
        

    }
}

let validacpf = new ValidaCPF('070.987.720-03');
// validacpf = new ValidaCPF('999.999.999-99');

if(validacpf.valida()) {

    console.log('CPF VALIDO.');

} else {

    console.log('cpf inválido.')
    
}
