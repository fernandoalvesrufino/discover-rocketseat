// Passo 1: Modelagem
class Queue {
  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.push(item)
    console.log(`${item} chegou na fila!`)
  }

  dequeue() {
    const item = this.data.shift()
    console.log(`${item} saiu da fila!`)
  }
}

// Passo 2: Utilização
const fila = new Queue()

fila.enqueue('Fernando')
fila.enqueue('Gabriella')
fila.enqueue('Maria')
fila.dequeue()
fila.dequeue()
fila.dequeue()
