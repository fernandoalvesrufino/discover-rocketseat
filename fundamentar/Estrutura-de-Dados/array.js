const jogadores = ['Morant', 'Doncic', 'LeBron', 'Curry', 'Giannis']

// O index começa pelo número 0
// Para acessar um elemento, eu preciso escrever o nome da variável e informar qual a posição desse elemento dentro de colchetes
console.log(jogadores[0]) // Morant
console.log(jogadores[3]) // Curry

// Para acessat o tamanho do array
console.log(jogadores.length) // 5

// Os arrays são iteráveis
for (let jogador of jogadores) {
  console.log(jogador)
}

// Adicionar um elemento
jogadores.push('Butler')
console.log(jogadores)

// Encontrar um elemento
const curry = jogadores.find(jogador => jogador === 'Curry')
console.log(curry)
// O find não é tão eficiente, pois se eu tiver 1.000.000 de elementos, ele vai rodar um por um, até encontrar o elemento em questão
// Se ele não encontrar, irá retornar undefined

// Deletar um elemento
// Infelizmente também não é tão eficiente, pois ao deletar um elemento, ele irá realocar ou reposicionar todos os demais elementos
jogadores.splice(1, 1) // Irá remover Doncic
console.log(jogadores)
