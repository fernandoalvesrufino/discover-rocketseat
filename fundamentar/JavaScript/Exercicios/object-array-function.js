/*
Esse desafio envolve a criação de dois arrays e uma função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.

Desafio:

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/


function entrada (valores) {
  let resultadoentradas = 0
  let resultadosaidas = 0
  let resultadoFinal = 0
  let saldo
  
  for (let elemento of valores.receitas) {
    resultadoentradas += elemento
  }
  
  for (let elemento of valores.despesas) {
    resultadosaidas += elemento
  }

  resultadoFinal = resultadoentradas - resultadosaidas
  if (resultadoFinal >= 0) {
    saldo = "Saldo POSITIVO"
  } else {
    saldo = "Saldo NEGATIVO"
  }

  return `
  ${saldo}. 
  Valor em conta: R$${resultadoFinal.toFixed(2)}.`
}

let financas = {
  receitas: [1000, 254, 123, 2342, 153],
  despesas: [1231, 234, 64, 32, 2]
}

console.log(entrada(financas))
