// clearTimeout - cancelar um TimeOut 
const timeOut = 3000
const finished = () => console.log('done!')

let timmer = setTimeout(finished, timeOut)
clearTimeout(timmer)
// Foi guardado o objeto de setTimeout na variável timmer, mas logo na sequencia ele foi cancelado com o clearTimeout 