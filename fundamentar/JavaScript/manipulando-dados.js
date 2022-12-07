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

/*
- Separando strings

Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.
*/

let sentence = "Eu quero viver o amor!"
let mySentence = sentence.split(" ")
// O método split vai separar a string pelos caracteres que eu definir e colocar em um array
console.log(mySentence)

let sentenceWithUnderscore = mySentence.join("_")
// Vai juntar todos os elementos da lista e colocar um _ entre ele, e transformar tudo em uma string
console.log(sentenceWithUnderscore)

/*
- Encontrando ´palavras em frases

Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.

*/
console.log(sentence.includes("viver")) // true
console.log(sentence.includes("amar")) // false

/*
- Criando array com construtor

Para criar um array com um método construtor, usa-se new Array(args), passando como argumento o tamanho deste vetor ou os valores, por exemplo: const array = new Array("a", "b", "c").

*/

let myArray = new Array ('a', 'b', 'c')
console.log(myArray)

let myNewArray = new Array(10)
console.log(myNewArray) // Será criado um array com 10 posições vazias

/*
- Elementos do Array

Para contar a quantidade de elementos em um array pode-se usar o método length.
*/

console.log('a', 'b', 'c')
console.log(['a', 
  {type: 'array'},
  function() { return 'Alô'},
].length)

/*
- Strings para array

Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. Por exemplo console.log(Array.from("developer").
*/

let newString = "Manipulação"
console.log(Array.from(newString)) // Aqui, cada caractere irá virar um elemento do array

/*
- Manipulando Arrays

Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array.

*/

let techs = ["html", "css", "js"]

// Adiciona um item no fim (Modifica o Array)
techs.push("node.js")
console.log(techs)

// Adicionar no começo (Modifica o Array)
techs.unshift("sql")
console.log(techs)

// Remover do fim (Modifica o Array)
techs.pop()
console.log(techs)

// Remover do começo (Modifica o Array)
techs.shift()
console.log(techs)

// Pegar somente alguns elementos do array (Retorna o que estou pedindo)
console.log(techs.slice(1, 3))
// o primeiro valor é referente a posição do elemento que quero e o segundo valor é até onde desejo que ele conte (começando a contar o elemento a partir de 1)

// Remover 1 ou mais itens em qualquer posição do array (Modifica o Array)
// techs.splice(1, 2)
// primeiro valor se refere ao index ou posição do elemento e o segundo até onde desejo que seja removido
// console.log(techs)

// Encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)
