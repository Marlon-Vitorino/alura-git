const notas = [10, 7, 8, 5, 10]
notas.pop()// não tem parametro dentro dos parenteses. Retira sempre o ultimo elemento
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média é ${media}`)