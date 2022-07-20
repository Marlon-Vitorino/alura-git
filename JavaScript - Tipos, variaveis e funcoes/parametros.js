// parametros de função

function soma(numero1, numero2) {
    return numero1 + numero2;
}

//console.log(soma(2, 2))
//console.log(soma(245, 201))
//console.log(soma(588, 60))

// parametros x argumentos

//ordem dos parametros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(40, "Juliana"))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)));