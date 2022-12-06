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
