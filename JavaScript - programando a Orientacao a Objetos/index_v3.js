class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    //o parentes representa que é uma operação e não somente uma variavel.
    sacar(valor) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
            }
    }
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 6276327632;

cliente2.nome = "Alice";
cliente2.cpf = 236273613;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;


console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50)



console.log(contaCorrenteRicardo.saldo);
console.log(cliente1);
console.log(cliente2);