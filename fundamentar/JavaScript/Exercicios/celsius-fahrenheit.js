/*
Nesse desafio faremos uma função que vai receber uma string em Celsius ou Fahrenheit, e fazer a transformação de uma unidade para a outra.

Desafio:

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/


function transformToCelsius(fahrenheit) {
  let celsius = 0
  let message = " ºC"
  
  celsius = (fahrenheit - 32) * 5 / 9

  return `${celsius.toFixed(1)} ${message}`
}

function transformToFahrenheit(celsius) {
  let fahrenheit = 0
  let message = " F"

  fahrenheit = celsius * 9/5 + 32

  return `${fahrenheit.toFixed(1)} ${message}`
}

console.log(transformToCelsius(78))
console.log(transformToCelsius(32))
console.log(transformToCelsius(19))
console.log(transformToCelsius(-10))

console.log(transformToFahrenheit(54))
console.log(transformToFahrenheit(-9))
console.log(transformToFahrenheit(24))




