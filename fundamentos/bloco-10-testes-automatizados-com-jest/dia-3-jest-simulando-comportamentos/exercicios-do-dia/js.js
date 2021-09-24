// 1), 2) e 3)
function numeroAleatorio() {
    let num = Math.floor(Math.random() * 100);
    return num;
};

// 4)
const caixaAlta = (palavra) => palavra.toUpperCase();
const primeiraLetra = (palavra) => palavra[0];
const concatena = (a, b) => `${a} ${b}`;

module.exports = {numeroAleatorio, caixaAlta, primeiraLetra, concatena};