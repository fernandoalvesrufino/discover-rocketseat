/*
Para entendermos mais sobre os tipos de dados, podemos compará-los com elementos da gramática, para
aprendermos precisamos saber como escrever, os significados e continuar aprendendo para expandir nosso 
vocabulário.
*/

/*
String
- Cadeia de caracteres, ou seja, textos. 

Para denotar string no JavaScript são usados aspas duplas ( " " ), aspas simples ( ' ' ) e template literals ou template strings (` `).

Template literals permitem textos multilinhas e expressões de linguagem com os caracteres ${ }, por exemplo: console.log(`A soma de duas unidades é ${1+1}`), já as outras não, por exemplo: console.log("Isso é um texto").
*/

// Apossibilidade de colocar valores (ex: ${1+1}) é chamado de interpolação
console.log(`A soma de duas unidades é ${1+1}`)

console.log(
`A soma de
duas unidades 
é ${1+1}`)

/*
Numbers

No JavaScript temos 4 tipos de números, os inteiros (por exemplo: 13), os reais ou float (por exemplo: 83.1), o Not a Number (NaN) e o infinito (Infinity).
*/ 

console.log(12+2)
console.log(12.5/9)
console.log(12.5/'asdfg')
console.log(12.5 === Infinity) //O I deve ser escrito em maiúsculo

/*
Boolean

No JavaScript, um dado boolean pode ter apenas 2 valores, verdadeiro (true) e falso (false).
Toda lógica que usarmos na programação vamos encontrar verdadeiro ou falso (ex: if e else)
*/
let two = 2
console.log(2 == two)

/* 
Undefined x Null

No JavaScript temos o tipo de dados Undefined, que representa valores indefinidos, e o tipo de dados null, que são muitas vezes confundidos. 
A diferença dos dois é que null é considerado como um objeto vazio, ou seja, algo indefinido não existe, já algo null existe mas não tem valor algum.
*/

console.log(undefined === null)

/*
Object

O tipo de dado Object é estrutural, contendo atributos (ou propriedades), e métodos (ou funcionalidades). Um objeto é denotado com os caracteres { }, atributos e métodos com nome: valor . Por exemplo: {nome: "João", idade: 20}
*/

console.log({})

let fernando = { 
  nome: "Fernando", 
  idade: 26,
  andar: function() {
    console.log('Andando...')
  },
}

console.log(fernando)
console.log(fernando.andar())


/*
Array (lista de dados)

O tipo de dados Array, ou vetor, também é estrutural, e consiste em uma lista de dados agrupados, um Array é denotado com os caracteres [ ] , por exemplo: [ "Leite", "Ovos", "Manteiga", 1, 2 ] .

*/
console.log([])

let programador = [
  'Fernando', 
  'Dev', 
  26
]

console.log(programador)

let listaMercado = [
  "leite",
  "pão",
  "laranja"
]

console.log(listaMercado)


/*
Conclusão

Conforme o ECMAScript Standard (o padrão do orgão que padroniza o JavaScript) temos 9 tipos de dados organizados em 3 categorias: Primitive / Primitive Value, Structural e Structural Primitive. 

- Os primitivos são: String, Number, Boolean, Undefined, Symbol, BigInt. 
- Os estruturais são: Object (nele podemos colocar Array, Map, Set, Date...) e Function. 
- O primitivo estrutural que consiste apenas no dado null

*/
