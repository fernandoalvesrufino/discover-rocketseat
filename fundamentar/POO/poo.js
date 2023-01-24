class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }

  get area() {
    return this.#calcularArea()
  }

  // Essa # significa que essa funcao/metodo nao sera visivel la fora. O acesso a ele so pode ser feito dentro dessa classe
  #calcularArea() {
    return this.altura * this.largura
  }
}

let poligono = new Poligono(50, 60)
console.log(poligono.area)
// console.log(poligono.area)