const numeros = [43, 50, 65, 12]

//                          callback                        numero inicial
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
//                valor: acumlado, atual
// como a função callback foi escrita na forma de arrow function e com só temos uma linha de instrução dentro da função, não precisamos usar chave e nem palavra-chave.

console.log(soma) 

//Reduce de uma forma mais extensa.

const soma2 = numeros.reduce(function(acum, atual) {
    return atual + acum
}, 0)

//Outra forma

function operacaoNumerica(acum, atual) {
    return atual + acum
}

const soma3 = numeros.reduce(operacaoNumerica, 0)