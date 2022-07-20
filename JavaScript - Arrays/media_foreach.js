const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0;

//      para cada
notas.forEach(nota => {// forEach tambem chamdo de callback
    somaDasNotas += nota
})

//poderiamos fazer tambem:
notas.forEach(function(nota)){//não precisa informar os colchetes
    somaDasNotas += nota//nota é uma função criada para receber os elementos
}

let media = somaDasNotas / notas.length;

console.log(media)