const cliente = {
    nome:"André",
    idade:36,
    cpf:"22738273287",
    email:"andre@email.com",
    fones:["84937835", "45374938"],
    dependentes: {
        nome: "Sara",
        parentesco: "filha",
        dataNasc:"20/03/2011"
    }
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc:"20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)