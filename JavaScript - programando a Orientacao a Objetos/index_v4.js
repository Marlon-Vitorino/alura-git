class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0; //por padrão utilizamos o "_" para indicar que um atributo é privado e não deveria ser alterado

    //Usamos métodos para dar nomes aos comportamentos que nossa classe possui e isso facilita a comunicação dentro da equipe
    //um método pode ter nenhum, um ou mais parâmetros. Essa é a maneira de passarmos informações para podermos reutilizar métodos em diferentes cenários
    //esse é o objetivo de métodos, definir o que um objeto saber fazer. O comportamento é implementado dentro do método.

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            }
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
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
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);