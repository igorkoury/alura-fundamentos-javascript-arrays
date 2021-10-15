const nomes = [ 'IGOR', 'FERNANDA', 'THIAGO', 'VALDIR', 'RODRIGO' ]

const notas = [ 10, 9, 8, 7, 4]

const reprovados = nomes.filter((nome,indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`)
