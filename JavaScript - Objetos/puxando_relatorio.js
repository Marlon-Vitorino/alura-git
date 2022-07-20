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

let relatorio = "";

//in=dentro
for(let info in cliente) {
    //tipeof informa o tipo de dado
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        //pular linha depois e antes do ` para melhorar a exibição
    relatorio += `
    ${info} ==> ${cliente[info]}
    `
    //para cada item do cliente, escreve uma info dentro do relatorio.
    }
}

console.log(relatorio)