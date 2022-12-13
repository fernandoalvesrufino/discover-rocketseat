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

let family = {
  incomes: [3200, 1200, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450, 1500]
}

function sum(array) {
  let total = 0

  for (let value of array) {
    total += value
  }

  return total
}

function calculateBalance (object){
  const calculateIncomes = sum(object.incomes)
  const calculateExpenses = sum(object.expenses)

  const total = calculateIncomes - calculateExpenses
  const positive = total >= 0

  let balanceText = "Negativo "

  if (positive) {
    balanceText = "Positivo"
  }

  console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance(family)
