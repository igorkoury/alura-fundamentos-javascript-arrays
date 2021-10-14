const alunos = ['Igor', 'Pina', 'Diego', 'Gabi'];

const mediasDosAlunos = [10, 7, 9, 6];

const listaDeNotasEAlunos = [alunos, mediasDosAlunos]

console.log(listaDeNotasEAlunos[0][0]) //irá imprimir Igor


const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua média é ' +
        listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Igor"))

