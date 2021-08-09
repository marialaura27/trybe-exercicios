let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
  
//1)
console.log('Bem-vinda, ' + info.personagem);

//2)
info.recorrente = 'sim';
console.log(info); 

//3)
for (let i in info) {
    console.log(i);
}

//4)
for (let i in info) {
    console.log(info[i]);
}

//5)
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let i in info) {
     console.log(info[i] + ' e ' + info2[i])
}
  

//funcoes 

//1)
function ehPalindromo(palavra) {
    if (palavra.length / 2 == 0) {
        return false;
    } else {
        for (let i = 0; i < palavra.length; i++) {
            if (palavra[0] === palavra[palavra.length - 1]) {
                palavra.slice(palavra[0], palavra[palavra.length - 1]);
                return true;
            } else { 
                return false;
            }
        }
    }
}
console.log(ehPalindromo('ovo'));

//2)
let numeros = [2, 3, 6, 20, 10, 30];
function maior(numeros) {
    let maior = 0;
    let index;

    for (let i in numeros) {
        if (maior < numeros[i]) {
            maior = numeros[i];
            index = i;
        }
    }
    return index;
}
console.log(maior(numeros));


//3)
let num2 = [2, 4, 6, -7, 10, 0, -3];
function menor(num2) {
    let menor = 0;
    let index2;
    for (let a in num2) {
        if (menor >= num2[a]) {
            menor = num2[a]
            index2 = a;
        }
    }
    return index2;
}
console.log(menor(num2));

//4)
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorNome(nomes) {
    let maiorNome;
    let numero = 0;
    for (let i in nomes) {
        if (numero < nomes[i].length) {
            numero = nomes[i].length;
            maiorNome = nomes[i];
        }
    }
    return maiorNome;
}
console.log(maiorNome(nomes));

//6)

function soma(n) {
    let soma = 0;
    for (let i = 0; i <= n; i++) {
        soma += i;
    }
    return soma;
};

console.log(soma(5))

//7)
function comparacao(word, ending) {
    if (word.endsWith(ending)) {
        return true;
    } else {
        return false;
    }
    
}
console.log(comparacao('trybe', 'be'));