// 1)
/*
function info(nome) {
   const email = nome.toLowerCase().split(' ').join('_');
   return { nome, email: `${email}@trybe.com` };
    
}

const newEmployees = () => {
    const employees = {
      id1: info('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: info('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: info('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees());
*/
/*
//2)

function checar(numAposta, numSorteado) {
  if (numAposta === numSorteado) {
    return true;
  } else {
    return false;
  }
}

function sorteio(num) {
  let numAleatorio = Math.floor((Math.random() * 5) + 1);
  console.log(numAleatorio);
  let res = checar(num, numAleatorio);
  if (res === true) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
}

console.log(sorteio(2));
*/
/*
const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function contaResultado(g, r) {
  let pontos = 0;
  for (let i = 0; i < 10; i += 1) {
    if (g[i] === r[i]) {
      pontos += 1;
    }
    if (g[i] !== r[i]) {
      pontos -= 0.5;
    }
  }
  return pontos;
};

const retornarResultado = (g, r, funcao) => {
  funcao = contaResultado(g, r);
  return `Resultado: ${funcao} pontos.`;
}

console.log(retornarResultado(gabarito, respostas));
*/
