//a sintaxe de class, a inicial começa com letra maiuscula
class Cliente {
    constructor(nome,email,cpf,saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    //metodo é uma função que executa no contexto de um objeto.
    //com class não precisa escrever a palavra chave function
    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo() {
        console.log(this.saldo)
    }
}

const andre = new Cliente("Andre","andre@email.com","47585638399",100)

andre.exibirSaldo()//ja exibi o valor, pois ja foi feito o console.log dentro do metodo exibirSaldo.

console.log(andre)