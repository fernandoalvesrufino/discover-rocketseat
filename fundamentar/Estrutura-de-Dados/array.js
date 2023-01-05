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
