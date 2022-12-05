/*
Objects

Para criarmos um objeto utilizamos as chaves envolvendo as propriedades, que são atribuídas com dois pontos, 
por exemplo: const person = { name: 'John', age: 20 }, para acessar essas propriedades usamos o ".", 
por exemplo: console.log(person.name).
*/

//adicionamos propriedade e valor dentro do objeto
const person = { 
// propriedade: valor,
  name: 'John', 
  age: 20 ,
  weight: 88.6,
  isAdmin: true
}

console.log(person.name)
console.log(typeof person)
console.log(`${person.name} tem ${person.age} anos.`)
