const cliente = {
    nome:"André",
    idade:36,
    cpf:"22738273287",
    email:"andre@email.com"
}

//              [0]
const chaves = ["nome", "idade", "cpf", "email"]

//                   [nome]
//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))