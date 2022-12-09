/*
- Expressões e operadores

Nas próximas aulas, falaremos sobre expressões e operadores.

Expresssões são bem tranquilas, porque expressões são qualquer linha de código que resolve alguma coisa no JavaScript, um exemplo é a expressão:

let number
Isso é uma expressão, já que estamos declarando uma váriavel, nesse caso com o valor de undefined.

Toda expressão do Javascript pode ou não terminar com ; (ponto e vírgula), o final de uma expressão é facultativa, mas em algumas outras linguagens é obrigatório o uso de ; (ponto e vírgula).

Em alguns casos é necessário o uso de ; (ponto e vírgula), como numa função auto-executável, é um dos poucos casos onde faz falta, e é em um cenário como o seguinte:

let number = 1

(function(){
  console.log('alo')
})()

Caso você tente executar esse código, ele vai tentar atribuir essa função ao valor 1, onde o Javascript vai tentar executar o 1, passar uma função como argumento, e o 1 vai receber uma outra função. Um dos pouquíssimos casos onde o ; (ponto e vírgula) faz falta.

Veremos também sobre operadores, nesse exemplo temos o binário, unário e ternário.

- unário 
let number = 1

console.log(++number)

- binário
let number = 1

console.log(number + 1)

- ternário
console.log(true ? 'alo' : 'nada')
Como você pode observar, temos no unário um elemento, no binário dois elementos e no ternário três elementos.

*/

let number = 1

console.log (number + 1)
console.log (++number) //incrementar
console.log (--number) //decrementar
console.log (typeof number) //tipo
console.log (true ? 'alo' : 'nada') // se verdadeira executa a primeira expressão
console.log (false ? 'alo' : 'nada') // se falso executa a segunda expressão


/*
- New

A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

Um exemplo de seu uso é:

let date = new Date('2020-12-01')
console.log(date.__proto__)
*/

let name = new String('Fernando') // O new fará com que a variável criada seja um novo objeto
name.surName = 'Rufino'
let age = new Number(26)
console.log(name, age)
console.log(name.surName, age)

let date = new Date("2022-12-09")
console.log(date)
console.log(date.__proto__)

/*
- Typeof delete

Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.

Exemplos de uso:

- delete 
const person = {
  name: 'Mayk',
  age: 25,
}
delete person.age

console.log(person)
Nesse caso estamos deletando a propriedade age do objeto person.

console.log(tyepof "mayk")
Aqui vemos qual o tipo de dado que temos, nesse caso uma string.
*/

console.log(typeof "Fernando")

const person = {
  name: 'Mayk',
  age: 25,
}

console.log(typeof person)
console.log(person)
delete person.age // Deletando a propriedade age
console.log(person)

/*
- Operadores aritméticos

Falaremos nessa aula sobre operadores aritméticos, que nos possibilitam fazer cálculos matemáticos.

O operador de multiplicação é o * (asterisco);

O operador de divisão é a / (barra);

O operador de soma é o + (positivo);

O operador de subtração é o - (negativo).

Outros operadores aritméticos incluem o resto de divisão, incremento, decremento e exponencial, com exemplos a seguir:

- resto da divisão: sinal %
let remainder
remainder = 11 % 9
console.log(remainder)

- incremento: sinal ++
let increment = 0

console.log(++increment)
console.log(increment)

- decremento: sinal -- 
let decrement = 0
decrement--
console.log(decrement)

- exponencial: sinal ** 
console.log(2 ** 3)
*/

// multiplicação
console.log(3.2 * 5.5)

// Divisão
console.log(12 / 2)

// Soma
console.log(34 + 67)

// Subtração
console.log(34 - 23)

// Resto da divisão
let remainder
remainder = 11 % 11
console.log(remainder)
remainder = 11 % 10
console.log(remainder)

// Incremento
let increment
increment = 0
console.log(increment)
increment++
console.log(increment)
// Existe diferença entre incrementar um valor antes e incrementar depois
// Ex: ++incrementar

// Decremento
let decrement = 0
--decrement
console.log(decrement)

// Exponencial
console.log(3 ** 3) // 3 elevado a 3

/*
- Grouping operator

Vamos falar sobre um operador que agrupa expressões, os parênteses.

Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, que moverá a precedência do cálculo.

let total = 2 + 3 * 5
console.log(total)
//com essa precedência, nosso resultado é 17.

let total = (2 + 3) * 5
console.log(total)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.
*/

let total = 2 + 3 * 5
console.log(total)

total = (2 + 3) * 5
console.log(total)

/*
- Operadores de comparação igual a e diferente de
*/

let one = 1 // A variável one recebe 1
let two = 2

// == Igual a 
console.log(two == 1) // two é igual a 1?
console.log(one == "1")

// != Diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

/*
- Operadores de comparação estritamente igual e estritamente diferente

Compara os valores e o tipo do elementos
*/

// === estritamente igual a
console.log(one === "1") // false
console.log(one === 1) // true

// === estritamente diferente de
console.log(two !== "2") // true
console.log(two !== 2) // false


/*
- Operadores de comparação maior e menor (igual)
*/

// > Maior que
console.log(one > two) // false

// >= Maior igual a
console.log(one >= 1) // true
console.log(two >= 1) // true

// < Menor que
console.log(one < two) // true

// <= Maior igual a
console.log(one <= two) // true
console.log(two <= 1) // true
console.log(two <= 0) // false

/*
- Atribuição
*/

// Veremos nesta aula sobre operadores de atribuição. Quando falamos em atribuição, queremos na verdade dizer assignment, que já vimos bastante, mas podemos também realizar diferentes tipos de atribuição, usando operadores aritméticos.

// Exemplos:

// Operadores de atribuição (Assignment)
let x
console.log(x) // undefined

// assignment normal:
x = 1

// addition assignment (adição):
x += 2 // x = x + 2
console.log(x) 

// subtraction assignment (subtração):
x -= 1
console.log(x) 

// multiplication assignment (multiplacação):
x *= 2
console.log(x) 

// division assignment (divisão):
x /= 2
console.log(x) 

// exponetiation assignment (exponenciação):
x **= 2
console.log(x) 

// remainder assignment (resto de divisão):
x %= 2
console.log(x) 
