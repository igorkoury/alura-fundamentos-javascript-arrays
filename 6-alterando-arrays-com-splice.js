const listaDeChamada = ['Igor', 'Rosi', 
'Tavares', 'Leilane', 'Duda', 
'Diego', 'Gabi', 'Matusa', 'Pina']

//desafio: remover leilane e duda e adicionar Flor

listaDeChamada.splice(3,4,'Flor')
console.log(listaDeChamada)

//desafio: adicionando Flor (na 5ª posição) sem remover ninguém

listaDeChamada.splice(5, 0, 'Flor')
console.log(listaDeChamada)
