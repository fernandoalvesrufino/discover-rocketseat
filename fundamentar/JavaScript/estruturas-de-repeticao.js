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


// for...of

// Cria um loop através de alguma variável que tivermos previamente (string, array...)

let name = 'Fernando'
let names = ['João', 'Pedro', 'Paulo']

// Para cada caracter DE nome
for (let char of name) {
  console.log(char)
}

// Para cada elemento DE nomes
for (let name of names) {
  console.log(name)
}

// for in

// Cria um loop em cima de um objeto

let person = {
  name: 'Jhon',
  age: 20,
  weight: 82.3
}

// para cada propriedade EM person
for (let property in person) {
  console.log(property)
  console.log(person[property])
}
