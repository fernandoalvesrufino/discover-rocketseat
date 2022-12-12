// Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas númericas em notas de caracteres.

// Desafio:

// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

function getScore (score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score < 90
  let scoreC = score >= 70 && score < 80
  let scoreD = score >= 60 && score < 70
  let scoreF = score >= 0 && score < 60

  let ScoreFinal

  if (scoreA) {
    ScoreFinal = "A"
  } else if (scoreB) {
    ScoreFinal = "B"
  } else if (scoreC) {
    ScoreFinal = "C"
  } else if (scoreD) {
    ScoreFinal = "D"
  } else if (scoreF) {
    ScoreFinal = "F"
  } else {
    ScoreFinal = "Nota inválida"
  }

  return ScoreFinal
}

console.log(getScore(100))
console.log(getScore(95))
console.log(getScore(85))
console.log(getScore(107))
console.log(getScore(65))
console.log(getScore(71))
console.log(getScore(9))
console.log(getScore(-9))
