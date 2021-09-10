/*
// 1)
const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
    return arrays.reduce((acumulado, item2) => acumulado.concat(item2), []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
*/
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
/*
// 2)
const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft";

function reduceNames() {
    return books.map((item) => item.author.name).reduce((acumulador, item2) => `${acumulador}, ${item2}`);
}

assert.strictEqual(reduceNames(), expectedResult);
*/
/*
// 3)
const expectedResult = 43;

function averageAge() {
    let age = books.map((item) => item.releaseYear - item.author.birthYear);
    let soma = age.reduce((acumulado, item) => (acumulado + item));
    return soma / age.length;
}
console.log(averageAge());
assert.strictEqual(averageAge(), expectedResult);
*/
/*
// 4)
const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  function longestNamedBook() {
      let tittleLength = books.map((item) => item.name.length).reduce((acumulado, proximo) => acumulado > proximo ? acumulado : proximo);
      return books.find((item) => item.name.length === tittleLength);
  }
  assert.deepStrictEqual(longestNamedBook(), expectedResult);
  */
/*
// 6)
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
    let media = grades.map((item, index) => ({
        name: item,
        avarage: (grades[index].reduce((acumulador, item2) => acumulador + item2, 0) / 5)
    }));
    return media;
}
console.log(studentAverage());

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
//assert.deepStrictEqual(studentAverage(), expected);
*/
