const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log("tamanho da array: ", nomes.length)
console.log(`Àlunos da sala 1: ${sala1}`)
console.log(`Àlunos da sala 2: ${sala2}`)