// apiScript.js
const jokeContainer = document.getElementById('jokeContainer');  
const API_URL = 'https://icanhazdadjoke.com/';

const showJoke = (joke) => {
    jokeContainer.innerHTML = joke.joke;
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
      .then(data => showJoke(data));
};


window.onload = () => fetchJoke();

/*
// 2)
const promise = new Promise((resolve, reject) => {
    const myArray = Array.from(
        { length: 10 },
        () => Math.floor(Math.random() * 50) + 1
    );
    const soma = myArray.map((numero) => numero * numero).reduce((acc, curr) => acc + curr);
    if (soma < 8000) {
        resolve(soma);
    } else {
        reject()
    }
});

promise
    .then((soma) => [soma / 2, soma / 3, soma / 5, soma / 10])
    .then((n) => n.reduce((acc, curr) => acc + curr))
    .catch (() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))


*/
