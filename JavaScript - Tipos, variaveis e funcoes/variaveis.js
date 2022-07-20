var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14 //aqui ele reatribuiu outro valor a variavel respostaDeTudo
    let idade = 42 //let só pode ser usada no mesmo escopo que esta definida
    const pi = 29 // não fez referncia ao primeiro, pois esta em bloco separado.
    
    console.log(respostaDeTudo, idade, pi)//resultado 3.14 42 29

}

const pi = 29// const sempre terá uma referência ao mesmo objeto ou valor primitivo da variavel, não pode ser alterada.
// A referência em si é imutável(ou seja podemos colocar em mais lugares), mas o valor mantido pela variável não se torna imutável.

console.log(respostaDeTudo, idade, pi) // resultado 3.14 29 3.14