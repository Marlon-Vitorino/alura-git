function cliente(nome,cpf,email,saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

function clientePoupanca(nome,cpf,email,saldo,saldoPoup) {
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const ju = new clientePoupanca("Ju","323232332323","ju@email.com",100,200)

console.log(ju)

//acessar o objeto poupança, entrar dentro da propriedade prototype e criar um novo metodo, a função.
clientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

ju.depositarPoup(30)

console.log(ju.saldoPoup)