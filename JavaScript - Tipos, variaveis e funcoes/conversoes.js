// tipo de dado
// booleanos

// conversão implicita: permite a conversão de um dado em outro: um number em string, uma string em number, entre outras.
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString)

console.log(numero + numeroString)

// um = atribiu valor a uma variavel, falamos recebe.
// dois == faz uma comparação do valor, só o que esta dentro.
// tres === compara não só a valor, mas tambem o tipo, por exemplo, se é uma string ou number.



// conversão explicita transforma em numero
// Number()
// String() ou toString()

console.log(numero + Number(numeroString)) //Number tambe pode vir dentro da const.

// se houver alguma string dentro do valor para conversão resultara "NaN"

// é possivel converter textos booleanos em string: tipo true e false. Os mesmos valores em number: 0(false) e 1(true) 

// ( +numeroString + +numeroString2 ). Colocar o operador "+" antes das variaveis, tambem transforma uma string em numero.
