const { EventEmitter } = require('events')
const { emitWarning } = require('process')
const ev = new EventEmitter()
// EventEmitter é uma classe. E aqui acima estou recebendo um objeto 
// console.log(ev)

// para disparar eventos preciso ouvir e emitWarning 
// ev.on('saySomething', () => {
//   console.log("Eu ouvi você")
// })

// ev.emit('saySomething')

ev.on('saySomething', (message) => {
  console.log("Eu ouvi você, ", message )
})

ev.emit('saySomething', "Fernando")
ev.emit('saySomething', "Gabriella")

// ev.once ouve uma unica vez (irá executar apenas uma vez), diferente do ev.on que está sempre ouvindo 