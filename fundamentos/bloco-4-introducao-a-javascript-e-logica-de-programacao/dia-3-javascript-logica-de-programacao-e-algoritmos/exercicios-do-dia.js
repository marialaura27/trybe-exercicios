
let n = 5;
let tela = '';
let tela2 = '';
let tela3 = '';

//1)
for (let i = 0; i < n; i++){
    tela += '*' ;
}

for (let i = 0; i < n; i++){
    console.log(tela)
}

//2)
for (let i = 0; i < n; i++){
    tela2 += '*';
    console.log(tela2)
}

//3)

for (let i = 0; i < n; i++){
    tela3 += ' ' ;
}
for (let i = 0; i < n; i++){
    tela3.replace(tela3[tela3.length - 1] ,'*');
    console.log(tela3)
}








