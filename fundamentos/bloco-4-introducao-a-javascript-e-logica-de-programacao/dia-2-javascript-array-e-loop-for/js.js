let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

//1) 
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
//2)
for (let i = 0; i < numbers.length; i++){
    soma += numbers[i];
}
console.log(soma)

//3) 
let media = soma / numbers.length;
console.log(media);

//4)
if (media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}

//5)
let maior = 0;


for (let a = 0; a < numbers.length; a++){
    if (a == 0) {
        maior = numbers[a];
    }
    if (numbers[a] > maior) {
        maior = numbers[a];
    }
}
console.log('Maior: ' + maior);

//6)
let impar = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 != 0) {
        impar++;
    }
    
}
console.log(impar);

//7)
let menor = 0;
for (let a = 0; a < numbers.length; a++) {
    if (a == 0) {
        menor = numbers[a];
    }
    if (numbers[a] < menor) {
        menor = numbers[a];
    }
}
console.log('Menor: ' + menor);

//8)
let num = [];
for (let i = 1; i <= 25; i++){
    num.push(i)
}

console.log(num);

//9)
for (let i = 0; i < num.length; i++){
    console.log(num[i] / 2)
}