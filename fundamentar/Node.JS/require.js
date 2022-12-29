// Modulos nativos 
const path = require('path')
console.log(path.basename(__filename))

// Para usar modulos, usamos a função require. Assim conseguimos usar modulos nos nossos projetos 

// ___________________________________

// Meus modulos 
// Não coloco o nome do modulo dentro da função e sim a localização
const myModule = require('./exports')
console.log(myModule)