const notas = [10, 9, 8 ,7 ,6]

// forEach somente executa, não retorna. Map retorna como uma nova array.

//                          
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)// ++antes ele adiciona nota,

console.log(notasAtualizadas)