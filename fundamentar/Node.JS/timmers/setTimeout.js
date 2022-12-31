const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
// finished é uma função callback. Ela vai ser chamada de volta após o tempo determinado em timeOut (3s)
console.log('Mostrar')