const clientes = [
    {
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
            }]
    },
    {
        nome:"Juliana",
        cpf: "4547382973",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.log(listaDependentes)
console.table(listaDependentes)