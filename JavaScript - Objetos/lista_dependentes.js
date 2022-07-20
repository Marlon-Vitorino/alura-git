const cliente = {
    nome:"André",
    idade:36,
    cpf:"22738273287",
    email:"andre@email.com",
    fones:["84937835", "45374938"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc:"20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

//console.log(cliente)

// entrou no objeto cliente, na chave dependentes e atraves do metodo filter, acessa cada um dos dependentes.
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")
// compara cada array se a dataNasc é igual ao solicitado

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)