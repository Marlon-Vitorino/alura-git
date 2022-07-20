const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediaDosAlunos = [10,7,9,6]

//includes retorna -> booleano: verdadeiro ou falso
// indexOf retorna -> numero do indice

let listaDeNotasEAlunos = [alunos, mediaDosAlunos]
                        // Ana
const exibeNomeENota = (nomeDoAluno) => {
                        // [alunos]        Ana
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)) { // includes faz a busca por Ana na array alunos[0]
                                    // [alunos]        Ana
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) // indexOf busca por Ana e retorna o numero do indice dentro da array alunos = 3.
                                // [alunos][3]                            [mediaDosAlunos][3]
        return listaDeNotasEAlunos[0][indice] + 'sua media é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return 'Aluno não esta cadastrado'
    }
}

console.log(exibeNomeENota("Nemo"))