const turmaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7] //9 elementos
const turmaPhyton = [6, 5, 8, 9, 5, 6] //6 elementos
const turmaJava = [7, 3.5, 8, 9.5] //4 elementos

//método reduce: pega todos os valores do array e transforma em um único valor

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => 
    acumulador + atual, 0)
    return somaDasNotas / notasDaSala.length
}

console.log(`Média da turma JS: ${mediaSala(turmaJS)}`)
console.log(`Média da turma Python: ${mediaSala(turmaPhyton)}`)
console.log(`Média da turma Java: ${mediaSala(turmaJava)}`)