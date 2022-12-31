const timeOut = 1000
const checking = () => console.log('Checking!')

setInterval(checking, timeOut)
// Essa funcao vai rodar indefinidamente, não vai parar. Aqui definimos apenas um intervalo de tempo, mas a funcao sempre continuara a ser executada 