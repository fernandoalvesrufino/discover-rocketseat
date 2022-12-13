/*
Nesse desafio faremos uma função que vai receber uma string em Celsius ou Fahrenheit, e fazer a transformação de uma unidade para a outra.

Desafio:

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

// transformTemperature('50F')

function transformTemperature(temperature) {
  const celsiusExists = temperature.toUpperCase().includes('C')
  const fahrenheitExists = temperature.toUpperCase().includes('F')

  // fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Unidade de temperatura não identificado!")
  }

  let updatedTemperature
  let formula
  let degreeSign

  // fluxo ideal, fahrenheit para celsius 
  if (fahrenheitExists) {
    updatedTemperature = Number(temperature.toUpperCase().replace("F", ""))
    formula = fahrenheit => (fahrenheit - 32) * 5/9 
    degreeSign = "C"
  }
  
  // fluxo alternativo, celsius para fahrenheit
  else if (celsiusExists) {
    updatedTemperature = Number(temperature.toUpperCase().replace("C", ""))
    formula = celsius => celsius * 9/5 + 32
    degreeSign = "F"
  }
  

  return formula(updatedTemperature).toFixed(1) + degreeSign

}

try{
  console.log(transformTemperature('50F'))
  console.log(transformTemperature('12C'))
  console.log(transformTemperature('-10F'))
  // console.log(transformTemperature('-8Z'))
} catch (error) {
  console.log(error.message)
}
