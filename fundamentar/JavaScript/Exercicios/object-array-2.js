// Esse é um desafio onde vamos trabalhar com arrays, começando com coisas básicas e complicando conforme anda.

// Desafio:

/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length
console.log("Total de categorias: " + totalCategories);
const books = 0

for (let category of booksByCategory) {
  console.log('Total de livros da categoria: ', category.category)
  console.log(">>> " + category.books.length)
}

function countAuthors(){
  let authors = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }
  console.log("Total de autores: " + authors.length)
}

function booksOfAugustoCury(){
  let booksofAugustoCury = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author == 'Augusto Cury') {
        booksofAugustoCury.push(book.title)
      }
    }
  }
  console.log("Total de livros do Augusto Cury: " + booksofAugustoCury.length)
  console.log("Livros do Autor: ", booksofAugustoCury)
}

function booksOfAuthor(author){
  let books = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author.includes(author)) {
        books.push(book.title)
      }
    }
  }
  if(author == '' || author == " "){
    console.log("Informe o author!")
  } else if (books.length > 0) {
    console.log(`Total de livros do autor ${author}: ${books.length}`)
    console.log(`Livros do Autor: ${books.join(", ")}`)
  } else {
    console.log("Livros do autor " + author + " não disponível atualmente!")
  }

}

countAuthors()
booksOfAugustoCury()
booksOfAuthor('Robert')
