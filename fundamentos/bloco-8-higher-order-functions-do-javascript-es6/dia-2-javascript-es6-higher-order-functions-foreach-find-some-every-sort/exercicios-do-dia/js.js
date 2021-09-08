const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
//
/*
// 1)
function authorBornIn1947() {
    let pessoa = books.find((item) => item.author.birthYear === 1947);
    return pessoa.author.name;
}
console.log(authorBornIn1947());
  
  //assert.strictEqual(authorBornIn1947(), 'Stephen King');
*/
/*
// 2)
function smallerName() {
  let nameBook = ' ';

  books.forEach((item) => {
    if (nameBook.length === 1) {
      nameBook = item.name;
    }
    if (item.name.length < nameBook.length) {
      nameBook = item.name;
    }
  });

  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');
*/
/*
// 3)
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  let livro = books.find((item) => item.name.length === 26);
  return livro;
}

assert.deepStrictEqual(getNamedBook(), expectedResult);
*/
/*
// 4)
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  let ordem = books.sort((a, b) => b.releaseYear - a.releaseYear);
  return ordem;
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);
*/
/*
// 5)
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((item) => item.author.birthYear > 1900 && item.author.birthYear < 2000);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);
*/
/*
// 6)
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((item) => item.releaseYear > 1980 && item.releaseYear < 1990);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);
*/
// 7)
