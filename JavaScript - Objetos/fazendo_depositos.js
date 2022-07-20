const cliente = {
    nome:"André",
    idade:36,
    cpf:"22738273287",
    email:"andre@email.com",
    fones:["84937835", "45374938"],
    dependentes: [
        {
            nome: "Sara",
            parentesco: "filha",
            dataNasc:"20/03/2011" },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    //this = isto
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)

console.log(cliente)