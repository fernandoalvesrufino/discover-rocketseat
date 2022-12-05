/*
Array

Para criarmos um vetor utilizamos [ ] envolvendo os valores, por exemplo: 
const animals = [ "Lion", "Monkey" ]

para acessar esses valores usamos a posição do valor no vetor, começando por 0, por exemplo: 
console.log(animals[0])

Para descobrirmos o número de posições de um vetor qualquer, podemos utilizar a propriedade length, 
por exemplo: animals.length.

*/

const animals = [ 
  "Lion", 
  "Monkey",
  {
    name: "Cat",
    age: 2
  },
  "Dog"
]

// para acessar algum elemento do array usamos [n]
// Se não houver nenhum elemento na posição indicada, sera retornado undefined
console.log(animals[7])

// a posição dos elementos do array começa a ser contado a partir do 0 (zero)
console.log(animals[0])
console.log(animals.length)

// posso também colocar objetos dentro de array e posso acessá-los com o .
// Isso é possível, mas não é recomendado aplicar um objeto apenas para um elemento do array pois pode causar confusão
console.log(animals[2].name)
console.log(animals[2].age)

console.log(animals[2])
