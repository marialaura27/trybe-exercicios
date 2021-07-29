let a = 1;
let b = 2;
let c = 6;
let d = -3;

//1)
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//2)
if (a > b) {
    console.log(a)
} else {
    console.log(b)
}
//3)
if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
}

//4)
if (d > 0) {
    console.log('Positive')
} else if (d < 0) {
    console.log('Negative')
} else {
    console.log('Zero')
}
//5)
let l1 = 60;
let l2 = 60;
let l3 = -60;
let soma = l1 + l2 + l3;

if (soma == 180) {
    console.log(true)
} else if (l1 < 0 || l2 < 0 || l3 < 0) {
    console.log('Erro!')
}
else {
    console.log(false)
}

//6
let peca = 'Bispo';
let minusculo = peca.toLowerCase();

if (minusculo == 'bispo') {
    console.log('Diagonais');
} else {
    console.log('ERRO!')
}

//7)
let nota = 80;

if (nota < 0 || nota > 100) {
    console.log('ERRO!')
} else if (nota >= 90) {
    console.log('A')
}else if (nota >= 80) {
    console.log('B')
}else if (nota >= 70) {
    console.log('C')
}else if (nota >= 60) {
    console.log('D')
}else if (nota >= 50) {
    console.log('E')
}else if (nota < 50) {
    console.log('F')
}

//8)
let n1 = 3;
let n2 = 4;
let n3 = 9;

if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0) {
    console.log(true)
} else {
    console.log(false)
}

//9)
if (n1 % 2 != 0 || n2 % 2 != 0 || n3 % 2 != 0) {
    console.log(true)
} else {
    console.log(false)
}

//10)
let custoInicial = 2;
let venda = 10;
let custoTotal = ((custoInicial * 20) / 100) + custoInicial;
let lucro = ((venda - custoTotal) * 1000)

console.log(lucro);

//11)
let salBruto = 3000;
let INSS;

if (salBruto <= 1556.94) {
    INSS = (salBruto * 8) / 100;
}
if (salBruto > 1556.95 && salBruto <= 2594.92) {
    INSS = (salBruto * 9) / 100;
}
if (salBruto > 2594.93 && salBruto <= 5189.82) {
    INSS = (salBruto * 11) / 100;
}
if (salBruto > 5189.82 && salBruto <= 5189.82) {
    INSS = salBruto - 570.88;
}

let salBruto2 = salBruto - INSS; //2670
let IR;

if (salBruto <= 1903.98) {
    IR = 0;
}
if (salBruto > 1903.99 && salBruto <= 2826.65) {
    IR = ((salBruto2 * 7,5) / 100) - 142;
}
if (salBruto > 2826.66 && salBruto <= 3751.05) {
    IR = ((salBruto2 * 15) / 100) - 354.80; 
}
if (salBruto > 3751.06 && salBruto <= 4664.68) {
    IR = ((salBruto2 * 22.5) / 100) - 636.13;
}
if (salBruto > 4664.68) {
    IR = ((salBruto2 * 27.5) / 100) - 869.36;
}
let total = salBruto2 - IR;
console.log(total)

