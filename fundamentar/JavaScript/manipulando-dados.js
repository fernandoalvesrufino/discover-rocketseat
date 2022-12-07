/*
- Prototype

O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.
*/

// "Fernando".__proto__
// console.log(["a", "b"].length)

// Cada dado já está embrulhado em um objeto que pode ser manipulado/acessado

/*
- Type conversion (typecasting) vs Type coersion

Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.
*/

console.log('9' + 5) // Type coersion
console.log(Number('9') + 5) // Type conversion

/*
- Strings em números

É possível transformar números em formato de string através do método Number() e números em formato number em string usando o método String().
*/

let string = '123'
console.log(Number(string)) // foi impresso um número

let number = 321
console.log(String(number)) // foi impresso uma string

/*
- Contando caracteres e dígitos

Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.

*/

let word = 'paralelepipedo'
console.log(word.length)

let numero = 1234
console.log(numero.length) // Aqui teremos um resultado undefined porque não é possível contar quantidade de números. Mas podemos contar caracteres em uma string. Assim, basta converter, como a seguio:

console.log(String(numero).length)

/*
- Casas decimais

Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.

*/


let novoNumero = 239.1242334
console.log(novoNumero.toFixed(2))
console.log(novoNumero.toFixed(2).replace('.', ',')) // O resultado será uma string

/*
- Maiúsculas e minúsculas

Para transformar uma string em letras maiúsculas pode-se usar o método toUpperCase(), e ao contrário, também é possível usar o toLowerCase() para transformar uma string em todas letras minúsculas.
*/

let frase = "Programar é muito bacana!"
console.log(frase.toLocaleUpperCase()) // maiúsculas
console.log(frase.toLocaleLowerCase()) // minúsculas
