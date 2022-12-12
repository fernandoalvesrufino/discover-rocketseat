// 1. Declare uma variável de nome weight 
let weight

// 2. Que tipo de dao é a variável acima? 
console.log(typeof weight)

// 3. Declare uma variável e atribua valores para cada um dos dados 
let name = 'Fernando'
let age = 26
let stars = 4.9
let isSubscribed = true

// 4. A variável student abaixo é de que tipo de dados? 
// let student 

// 4.1 Atribua a ela as mesmas prpriedades e valores do exercício 3 

// 4.2 Mostre no console a seguinte mensagem:
// <name> de idade <age> pesa <wuight> kg.

let student = {
  name: 'Fernando',
  age: 26,
  weight: 83.9,
  isSubscribed: true,
}

console.log('A variável student é um(a)', typeof student)
console.log(student)

console.log(`${student.name} tem ${student.age} anos e pesa ${student.weight} kg.`)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum visualViewport, ou seja, somente o Array vazio 
let students = []

// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array). 
students = [
  student
]

console.log(students)

// 7. Coloque no console o valor da posição zero do Array acima 
console.log(students[0])


// 8. Crie um novo student e coloque na posição 1 do array students 

const john = {
  name: 'John',
  age: 22,
  weight: 73.7,
  isSubscribed: true,
}

/*
Uma das formas de adicionar um elemento em um array é:

students = [
  student,
  john
]
Aqui foram reatribuidos os valores
*/


/*
Ou simplesmente atribuir o elemento a posição desejada:

>>> students[1] = john
*/

students.push(john)
console.log(students)

// 9. Sem rodar o codigo, responda qual é a resposta do código abaixo e por que? Após a sua resposta, rode o código e veja se você acertou. 

console.log(a)
var a = 1
