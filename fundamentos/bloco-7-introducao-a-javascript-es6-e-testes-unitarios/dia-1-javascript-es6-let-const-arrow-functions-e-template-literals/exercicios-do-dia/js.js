const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

testingScope(true);
  
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort(function (a, b) {
    return a - b;
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`) // será necessário alterar essa linha 😉

const fatorial = n => {
    let res = 0;
    for (let i = 2; i < n; i += 1) {
        const mult = (i + 1) * i;
        res += res + mult;
    }
    return res;
}

console.log(fatorial(4))

const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';
let maior = ' ';
let array = frase.split(' ');

const encontrarMaiorPalavra = () => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maior.length) {
      maior = array[i];
    }
  }
  return `A maior paralavra é: ${maior}`;
}
console.log(encontrarMaiorPalavra(frase));
