/*
// 1)
const assert = require('assert');
// escreva a função addOne aqui
function addOne(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i += 1) {
        res[i] = arr[i] + 1;
    }
    return res;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
*/
/*
// 2)
const assert = require('assert');

function wordLengths(obj) {
    let arr = [];
    for (let i = 0; i < obj.length; i += 1) {
        arr[i] = obj[i].length; 
    }
    return arr;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
*/
/*
// 3)
const assert = require('assert');

function sumAllNumbers(obj) {
    let sum = 0;
    for (let i = 0; i < obj.length; i += 1) {
        sum += obj[i];
    }
    return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
*/
/*
// 4)
const assert = require('assert');

function findTheNeedle(obj, valor) {
    let res = -1;
    for (let i = 0; i < obj.length; i += 1) {
        if (obj[i] === valor) {
            res = i;
        } 
    }
    return res;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
*/