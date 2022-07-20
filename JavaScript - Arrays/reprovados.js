const nomes = ["Ana", "Marcos", "Maria", "Mauro"]
const notas = [7, 4.5, 8, 7.5]

// filter: primeira função callback. funciona como metodo true oo false.    

//retorna os indice dos nomes e busca a nota conforme o mesmo indice, em seguida comparando se é menor que 5.
const reprovados = nomes.filter((aluno, indice) => notas [indice] < 5)
console.log(`reprovados: ${reprovados}`)