const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
// 1)
const add = (objeto, chave, valor) => {
    objeto[chave] = valor;
    return(lesson2)
}

console.log(add(lesson2, 'turno', 'manha'));
// 2)
const listar = (objeto) => {
    let res = Object.keys(objeto);
    return console.log(res);
}

listar(lesson3);
// 3) 
const mostrar = (objeto) => {
    let res = Object.keys(objeto);
    return res.length;
}

console.log(mostrar(lesson1));
// 4)
const mostrarValores = (objeto) => {
    let res = Object.values(objeto);
    return res;
}

console.log(mostrarValores(lesson1));

// 5) 
const allLessons = {};
Object.assign(allLessons, { lesson1, lesson2, lesson3 });
// 7)
const pegaValor = (objeto, posicao) => {
    const valores = Object.values(objeto);
    const res = valores[posicao];
    return res;
}

console.log(pegaValor(lesson1, 0));

//8)
const verificarPar = (objeto, chave, valor) => {
    let res = false;
    const chavesEValores = Object.entries(objeto);
    for (let i = 0; i < chavesEValores.length; i += 1) {
        if (chavesEValores[i][0] === chave && chavesEValores[i][1] === valor) {
            res = true;
        }
    }
    return res;
}
console.log(verificarPar(lesson3, 'turno', 'noite'));