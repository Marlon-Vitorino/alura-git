class Cliente {
    constructor(nome,email,cpf,saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

     depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

//extends: herança, herdou de cliente as propriedades informadas no super
class clientePoupanca extends Cliente {
    constructor(nome,email,cpf,saldo,saldoPoupanca) {
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}

const andre = new clientePoupanca("Andre","andre@email.com","36224654635",100,200)

console.log(andre)

andre.depositar(50)
andre.depositarPoupanca(50)

console.log(andre)

//Na orientação a objetos uma classe serve como uma planta que descreve os atributos e comportamentos comuns a objetos de um mesmo tipo.

//No JavaScript temos a definição de um método construtor para a inicialização das propriedades de objetos no momento da sua instanciação em memória.
