# POO

- Programação orientada à objetos
- Um modo de pensar, um modo de resolver um problema (um paradigma de desenvolvimento)

Vamos pensar nas coisas como um objeto. Como um smartphone, por exemplo. Ele tem uma cor, um peso, uma marca, um tamanho, uma largura.

## Utilização no mercado
- Na maioria dos sistemas atuais
- Várias linguagens (JS, TS, Python, Java...)

## Onde e quando eu vou utilizar?
- Depende da linguagens
  - Tem linguagens que são orientadas a objeto. Tem linguagens que são funcionais. Depende do paradigma! Agora, em linguagens multiparadigmas é possível utilziar POO
  - JS é multiparadigma
  - Alguns padrões de pensar em JS exigem que POO seja utilizado
- Para organizar o código
- Para melhor entendimento
- Para reuso de código
- Separar a complexidade do código
- Abstrair o código
- Classificar as rotinas e trechos do código

## Conceitos

> Uma boa fundamentação é essencial

### Objetos
- Uma caneta é um objeto
- Todo objeto possui propriedades e funcionalidades
  - propriedades = atributos
  - funcionalidades = métodos ou comportamento
  - estado = estado atual, muda dependendo de como o objeto está

### Objetos: abstratos x mundo real
- Mundo real
  - Pessoa
  - Aluno
  - Produtp
  - Carrinho de compras

- Abstratos
  - Autenticação (Ex.: Login no Facebook)
  - Autorização

> Nem todo objeto do mundo real fará parte do seu sistema
> - Ex: Em um escritório, podemos desenvolver uma agenda. Mas não vamos criar um objeto papel, ou um objeto caneta.

### Classes
Funcionam como moldes para os objetos. Objetos e classes são diferentes, mas uma coisa depende da outra. 

- Um objeto é criado a partir de uma classe.
- Ex: Máquina de biscoito
  - A maquina é a classe
  - O biscoito é o objeto ou instância
    - Instância significa que estamos criando um objeto através da classe

### Classes em JS
O conceito de classe em JS é diferente do conceito de uma linguagem que é completamente orientada à objetos.
JS é multiparadigma
Em JS os objetos são protótipos.

```
// definir classe
class Pessoa {
  constructor(nome){
    this.id = ~~(Math.random() * 100000)
    this.nome = nome
  }
}

// criar objeto
const pessoa = new Pessoa('fernando')
```

Mas o JS vai trazer muito mais funcionalidades do que somente essas 2 que foram colocadas.

> Em um objeto puro de uma classe em Java so haveriam essas 2 propriedades criadas.

Em JS já existe herança prototipal. Isso significa que le já vai puxar de outra classe acima dela, muitas outras propriedades e funcionalidades. 
Um objeto herda de outro que herda de outra até chegar à classe pai.

Ex: No exemplo citado anteriormente, a opção 'id' por ser um número, vai herdar tudo o que for de um número. E a opção 'nome' por ser string, vai herdar tudo de string.

Aqui as classes são apenas maneiras bonitas de representar protótipos.

## Encapsulamento

Podemos dirigir um carro, mesmo sem saber como funciona o motor do carro.

- Significa "colocar numa capsula"
- Agrupamento de funções e variáveis
  - Todas as funções e variáveis que estavam espalhadas no código, agora estão dentro de uma classe
- Esconde detalhes de implementação
  - Usamos os objetos, mas por baixo dos panos acontecem muito mais coisas
  - Ex: Não precisamos, toda vez que formos dar partida no carro, pensar no funcionamento de cada componente para isso acontecer
- Camada de segurança para os atributos e os métodos

``` javascript
class Poligono {
  constructor(altura,largura) {
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
```

## Programação Estruturada x Orientada à Objetos

### Estruturada 

- Processa a entrada e manipulação dos dados até a saída
- Uso de sequências, estruturas de repetições e condições
- Uso de uma rotina maior,ou sub-rotinas
- Não existem restrições às variáveis

### Orientada à Objetos

- Surge para trazer um cuidado ao uso estruturado
  - Não elimina por completo o uso estruturado
- Conceitos como Objetos e Classes
- Cuidados com variáveis e rotinas (encapsulamento)
- Melhor reuso de código

## Herança

- Pais e filhos
- Os objetos podem herdar, ou estender, características bases
- Uma cópia de atributos e métodos de outra classe

Exemplo:
``` javascript
class Veiculo {
  rodas = 4;

  mover(direcao){}
  virar(direcao){}
}

class Moto extends Veiculo {
  constructor() {
    super() // Puxa atributos e metodos do pai
    this.rodas = 2
  }
}
```

- Um objeto pode estender de outro objeto que pode estender de outro objeto e ai vai...
- Fácil reutilização de código

## Polimorfismo

- Polomorfismo significa "muitas formas".

Quando um objeto estende de outro (herança), talvez haja a necessidade de reescrever uma ou mais características (atributos e métodos) nesse novo objeto.

Temos o poder de recriar um método (ou mais) da classe herdada.

> Ex: Digamos que criamos uma classe Ave. Depois herdamos dessa classe Ave uma classe chamada Pato. Precisamos mudar o código para o método "voar", pois o pato não voa tão bem. E se herdamos da classe Ave uma nova classe chamada Falcao. Também precisamos alterar as informações do método "voar". Isso é o polimorfismo.

``` javascript
class Atleta {
  peso;
  categoria;

  constructor(peso) {
    this.peso =peso
  }

  definirCategoria() {
    if(this.peso <= 50) {
      this.categoria = 'infantil'
    } else if (this.peso <= 65) {
      this.categoria = 'juvenil'
    } else {
      this.categoria = 'adulto'
    }
  }
}

class Lutador extends Atleta {
  constructor(peso) {
    super(peso)
  }

  definirCategoria() {
    if(this.peso <= 54) {
      this.categoria = 'pluma'
    } else if (this.peso <= 60) {
      this.categoria = 'leve'
    } else if (this.peso <= 75) {
      this.categoria = 'meio-leve'
    } else {
      this.categoria = 'pesado'
    }
  }
}
```

## Abstração
Template ou identidade de uma classe que será construuida no futuro

- Atributos e métodos podem ser criados na classe de Abstração (Superclasse) MAS
- A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração (aqui não é implementado nada, apenas na classe que irá herdar)

``` javascript
class Parafuso {
  constructor() {
    if (this.constructor == Parafuso) 
      throw new Error('Classe abstrata não pode ser instânciada!')
  }

  get tipo() {
    throw new Error('Método "get tipo()" precisa ser implementado!')
  }
}


class Fenda extends Parafuso {
  constructor() { super() }

  get tipo() { 
    return 'fenda'
  }
}

class Philips extends Parafuso {
  constructor() { super() }

  get tipo() { 
    return 'philips'
  }
}

class Allen extends Parafuso {}
  // Criar e usar
  // new Parafuso() // 'Classe abstrata não pode ser instanciada'
  let fenda = new Fenda()
  let philips = new Philips()
  let allen = new Allen()

  console.log(fenda.tipo, philips.tipo)
  // console.log(allen.tipo)
```

Nesse exemplo, só existe parafuso se ele for de algum tipo específico como:
Fenda, Philips ou Allen.

