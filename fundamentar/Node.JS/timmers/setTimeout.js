const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
// finished é uma função callback. Ela vai ser chamada de volta após o tempo determinado em timeOut (3s)
console.log('Mostrar')

// Aqui tambem podemos ver o assincronismo. Pois o js vai executar o console.log('Mostrar') e depois vai imprimir o que foi definido no setTimeout 
// Se fosse sincrono, seria executado linha por linha 