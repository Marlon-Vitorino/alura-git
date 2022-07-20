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

function oferecerSeguro(obj) {
	const propsClientes=Object.keys(obj);	if(propsClientes.includes("dependentes")) {
		console.log(`Oferta de seguro de vida para ${obj.nome}`);
	}
}

console.log(Object.values(cliente))

console.log(Object.entries(cliente))

oferecerSeguro(cliente)

//includes é um metodo de array que verifica se o array que estamos trabalhando inclui determinado dado. Retorna true ou false.

//Object.keys pega a chave
//Object.values pega os valores das chaves
//Object.entries traz as chaves e valores
