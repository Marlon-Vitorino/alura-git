//class é um molde
class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

//cliente 1 e 2 é uma instancia da classe Cliente
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 6276327632;
cliente1.agencia = 1001;
cliente1.saldo= 0;

cliente2.nome = "Alice";
cliente2.cpf = 236273613;
cliente2.agenciac = 1001;
cliente2.saldo= 0;

console.log(cliente1,cliente2)