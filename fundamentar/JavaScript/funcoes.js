// console.log('Aula sobre functions')

/*
functions 

Funções são tipos de dados estruturais, que são declarados dessa forma: 

function nomeFunção(parâmetroDaFuncao) {
  código à ser executado 
}

e para executar a função, usa-se: 

nomeFunção()

Uma função é importante para o agrupamento e reutilização de código.
*/

// Criar aplicativo de frases motivacionais:
// console.log("Estudar é muito bom")
// console.log("Paciência e persistência")
// console.log("Revisõ é a mãe do apredizado")

// Para não precisar repetir isso sempre, podemos usar funcoes

// declaration - declaração da função
// function statement
// function createSentences() {
//   console.log("Estudar é muito bom")
//   console.log("Paciência e persistência")
//   console.log("Revisão é a mãe do apredizado")
// }

// Executar, rodar, chamar a função
// createSentences()
// createSentences()

// console.log("Fim do programa")

/*
Argumentos e parâmetros

Também é possível declarar funções dentro de variáveis, desta maneira: 
const variavel = function() {}

Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.
*/


// function expression
// function anonymous (funções anônimas)

// a função recebe os parameters (parâmetros)
const sum = function(number1, number2) {
  // console.log(number1 + number2)
  let total = number1 + number2
  return total
  // No escopo da funcao, se eu criar uma variável do tipo var, ela não estará acessível como visto nos exemplos anteriores.
  // Devemos tomar cuidado ao criar uma variável dentro de uma função. Pois se não definirmos o tipo da variável, ela pode ficar acessível nas demais partes do código. E isso é perigoso, pode trazer diversos problemas futuros.
}


let total = 0

// sum(2, 3) // passamos arguments (argumentos) para a função
let number1 = 34
let number2 = 25

// sum(number1, number2)

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`) // Aqui só irá ser apresentado o valor da soma se o resultado for retornado. Senão, será impresso o resultado da função e só depois será apresentado a mensagem. PS: A mensagem retornara o resultado undefined, pois nenhum valor foi retornado
console.log(total)
// Esse total é diferente do total dentro da função

/*
return

Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.
*/

// Outro exemplo
// Função é um liquidificador
function fazerSuco(fruta1, fruta2) {
  return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maça')
console.log(copo)

/*
- function scope

Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função.
*/

let subject = 'create video'

function createThink(subject) {
  // Essa variável é diferente da criada fora da função
  subject = 'study'
  return subject
}

console.log(subject)
console.log(createThink(subject))

/*
- Function Hoisting

O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis.
*/

// sayMyName()

// É como se o JS colocasse a função no topo (hoisting)
// function sayMyName() {
//   console.log('Fernando')
// }

/* 
O mesmo não ocorreria se no lugar eu criasse uma variável que recebesse uma função anônima. Ex:

const sayMyName = function (){
  console.log('Fernando')
}

Aqui teriamos um erro de referência
*/


/*
- Arrow function

Também podemos escrever funções expression de uma maneira mais compacta, desta maneira: 

() => { 
  código a ser executado 
}

Essa é uma maneira mais moderna de se escrever funções anônimas
*/

// const sayMyName = () => {
//   console.log('Fernando')
// }
// Geralmente atribuimos arrow functions para uma constante const

// sayMyName()

/*
- callback function

Uma callback function é uma função que está sendo passada para outra função como parâmetro.
*/

function sayMyName(name) {
  console.log('Antes de executar a calback')

  name()

  console.log('Depois de executar a callback')
}

sayMyName(
  () => {
    console.log('Estou em uma callback')
  }
)

// Isso nada mais é do chamar uma função dentro de outra função 


/*
- Funções construtoras

Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:
*/

// Colocar o maiúsculo não é obrigatório, mas é uma boa prática pois já temos diversas funções construtoras. Ex:
let nome = new String('Fernando')
console.log(nome)


// Criando uma função construtora
function Person(name) {
	this.name = name
	this.walk = function() {
		return this.name + " está andando"
	}
}

// Isso se chama instanciar um objeto
const fernando = new Person("Fernando")
const joao = new Person("João")

// fazer isso é melhor que criar um objeto em si porque agora basta alterar o código da função construtora e iremos alterar tanto a variável fernando quando a variável joao

console.log(fernando)
console.log(fernando.walk())
console.log(joao)
console.log(joao.walk())

/*
- expressão new
- criar um novo objeto
- this keyword
*/
