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
function createSentences() {
  console.log("Estudar é muito bom")
  console.log("Paciência e persistência")
  console.log("Revisão é a mãe do apredizado")
}

// Executar, rodar, chamar a função
createSentences()
createSentences()

console.log("Fim do programa")

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
  console.log(number1 + number2)
}

sum(2, 3) // passamos arguments (argumentos) para a função

