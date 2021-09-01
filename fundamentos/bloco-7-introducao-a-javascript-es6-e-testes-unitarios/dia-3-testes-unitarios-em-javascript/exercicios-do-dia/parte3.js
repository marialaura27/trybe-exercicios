/*
//1)
const assert = require('assert');

const greetPeople = (people) => {
    let greeting = 'Hello ';
    let res = [];
  
    for (const i in people) {
      res[i] = greeting + people[i];
    }
    return res;
  };
  
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter);

assert.deepStrictEqual(output, result);
assert.strictEqual(typeof greetPeople, 'function');
*/
// 2)
const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
    const results = [];
    contador = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
        contador += 1;
      results.push(contador);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowels, 'function');
const output = removeVowels(parameter);
assert.strictEqual(output, result);
