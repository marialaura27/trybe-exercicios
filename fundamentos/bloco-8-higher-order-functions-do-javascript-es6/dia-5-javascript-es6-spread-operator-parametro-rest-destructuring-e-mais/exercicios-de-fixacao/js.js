// Operator
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['mamão', 'melancia', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['uva', 'manga', 'laranja'];

const fruitSalad = (fruit, additional) => {
    let receita = [...specialFruit, ...additionalItens];
    return receita;
};

console.log(fruitSalad(specialFruit, additionalItens));
//
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida); // arroz gato água

// 
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

//
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

//
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [res] = saudacoes;
saudacoes[1](res);
saudacoes[1](saudacoes[0]); // Olá
//
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude});
  
console.log(getPosition(-19.8157, -43.9542));
//
const multiply = (number, value = 1) => {
    return number * value;
  };
  
  console.log(multiply(8));