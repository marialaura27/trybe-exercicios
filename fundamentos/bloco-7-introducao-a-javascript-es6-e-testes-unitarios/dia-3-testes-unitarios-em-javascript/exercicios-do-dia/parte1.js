/*
// 1)
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
// implemente seus testes aqui

const res1 = sum(4, 5); 
assert.strictEqual(res1, 9);

const res2 = sum(0, 0); 
assert.strictEqual(res2, 0);

const res3 = sum(4, '5'); 
assert.strictEqual(res3, 9);
*/
/*
// 2)
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const res1 = myRemove([1, 2, 3, 4], 3);
assert.deepStrictEqual(res1, [1, 2, 4]);
assert.notDeepStrictEqual(res1, [1, 2, 3, 4]);
const res2 = myRemove([1, 2, 3, 4], 5);
assert.deepStrictEqual(res2, [1, 2, 3, 4]);
*/

/*
// 3)
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

const res1 = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.deepStrictEqual(res1, [1, 2, 4]);
assert.notDeepEqual(res1, [1, 2, 3, 4]);

const res2 = myRemoveWithoutCopy([1, 2, 3, 4], 1);
assert.strictEqual(res2.length, 3);

const res3 = myRemoveWithoutCopy([1, 2, 3, 4], 5);
assert.deepStrictEqual(res3, [1, 2, 3, 4]);
*/
/*
//4)
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.deepStrictEqual(myFizzBuzz(3), 'fizz');
assert.deepStrictEqual(myFizzBuzz(5), 'buzz');
assert.deepStrictEqual(myFizzBuzz(2), 2);
assert.deepStrictEqual(myFizzBuzz('15'), false);
*/
// 5)
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2);