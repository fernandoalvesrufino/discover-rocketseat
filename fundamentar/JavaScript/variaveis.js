/*
Variáveis

Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código 
ou identificadores. 

Para criar uma variável, podemos usar uma das palavras reservadas: 
- var, 
- let e 
- const

Por exemplo: var clima = "quente", onde var é a palavra que simboliza a criação da variável, clima é o 
nome da variável, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string 
que está sendo recebida. 

As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const
não.

*/

var clima = "quente"
console.log(clima)

clima = "frio"
console.log(clima)

// var e let são semelhantes. Posso mudar o valor

const carro = "Land Rover"
console.log(carro)

// carro = "BMW"
// >>> TypeError: Assignment to constant variable (Foi atribuida uma variável constante). Ou seja,
//                não pode mudar


/*
O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário
estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.
*/

let numero = 2 //number
console.log(typeof numero)

numero = "" // string
console.log(typeof numero)

/*
É possível mudar o tipo, por ser uma linguagem fracamente tipada e dinâmica. Inicialmente a variável numero
era uma variavel do tipo number, e foi alterada para o tipo string.

PS: Hoje costumamos usar let e const. Dificilmente usamos var
*/


/*
Scope e var

O Scope ou Escopo determina a visibilidade de uma variável em um código, e para entender scope precisamos 
primeiramente entender block statement, que é o código presente dentro de chaves. O escopo do var é global, 
ou seja, uma variável declarada com var poderá ser usada em todo o código.

*/

// variável global -> tudo o que está sendo executado na minha aplicação, todo o script
// variável local -> Só existe dentro de um escopo

console.log("Existe x antes do bloco? ", x)

{
  var x = 0
  // Aqui o JS está como que criando a variavel x no início do programa e só atribuindo o valor 0 nessa linha
}

console.log("Existe x depois do bloco? ", x)

/* 
Scope let e const

Diferentemente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.

*/

// console.log('> existe y antes do bloco? ', y)
// O y não existe no escopo global. Apenas no local

{
  let y = 0
  console.log('> existe y? ', y)
}

// console.log('> existe y depois do bloco? ', y)
// O y não existe no escopo global. Apenas no local

let z = 1

{
  z = 0
  console.log('> existe z? ', z)
  // Aqui ele procura o z. Ele sobe de escopo em escopo e atualiza o valor de z
  // Se a variável criada for const, ela não irá mudar
}

console.log('> existe z depois do bloco? ', z)
// O valor de z foi atualizado


const w = 2

{
  const w = 0
  console.log('> existe w? ', w)
  // Aqui foi criada uma nova variável de escopo local. E não será atualizado o valor de w na variável global (criada fora do bloco)
}

console.log('> existe w depois do bloco? ', w)
// Aqui o valor impresso será o da variável global (criada fora do bloco)

// Por isso que o var não é mais tão utilizado, pois ele é muito flexível e pode ser alterado de várias formas diferentes dependendo do escopo que ela está. 
// Esse é um dos perigos de se usar o var, ele permite alteração em diferentes escopos, o que causa bugs inesperados