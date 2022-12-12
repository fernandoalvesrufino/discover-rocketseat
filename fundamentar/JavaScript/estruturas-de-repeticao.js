/*
- For

A estrutura de repetição for tem a seguinte sintaxe:

>>> for(inicialização de uma variável; condição de continuação para o loop; expressão final)
*/

// for(let i = 0; i <= 10; i++) {
//   console.log(i)
// }

// for(let i = 10; i >= 0; i--) {
//   console.log(i)
// }

for(let i = 0; i <= 100; i += 10) {
  console.log(i)
}

// break - para a interrupção do loop
// continue - pula a execução do momento

/*
- While

Também é uma estrutura de repetição. Devemos tomar cuidado para não criar um loop infinito.
*/

let i = 0
while(i < 10){
  console.log(i)

  i++
}

// Usamos while quando não sabemos qual o momento da parada. Ex:

i = 2342145235634123423456456
while(i > 10){
  console.log(i)

  i /= 50
}
