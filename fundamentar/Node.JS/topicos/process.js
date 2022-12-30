// console.log(process)

// Lista de argumetos
console.log(process.argv)
// tras um array com o node que ele está rodando e o nome do arquivo. Traz uma lista de argumentos que estou rodando no node

const firstName = process.argv[2]
const lastName = process.argv[3]
console.log(`seu nome é ${firstName} ${lastName}`)

// Com o process conseguimos pegar os argumentos e colocar dentro do nosso programa
// O process é um objeto que está falando sobre o processo que está sendo rodado no node