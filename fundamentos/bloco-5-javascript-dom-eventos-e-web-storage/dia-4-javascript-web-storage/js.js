window.onload = function () {
    let meio = document.getElementsByTagName('main')[0];
    let BTNbackground = document.getElementsByClassName('cor');

    meio.style.backgroundColor = localStorage.getItem("backgroundColor");

    for (let i = 0; i < BTNbackground.length; i += 1) {
        BTNbackground[i].addEventListener('click', mudaBackground);
    }

    function mudaBackground(event) {
        let cor = event.target.innerText;
        meio.style.backgroundColor = cor;
        localStorage.setItem("backgroundColor", cor);
    }

    let fonteMeio = document.querySelectorAll('#font-color button');

for (let i = 0; i < fonteMeio.length; i += 1) {
    fonteMeio[i].addEventListener('click', mudaCorFonte);
} 

function mudaCorFonte(event){
    let corFonte = event.target.innerText;
    meio.style.color = corFonte;
    localStorage.setItem("color", corFonte);
}
    meio.style.color = localStorage.getItem("color");
    

    let tamanhoFonte = document.querySelectorAll('#font-size button');

    for (let i = 0; i < tamanhoFonte.length; i += 1){
        tamanhoFonte[i].addEventListener('click', mudaTamanhoFonte);
    }

    function mudaTamanhoFonte(event) {
        let tamanho = event.target.innerText;
        meio.style.fontSize = tamanho;
        localStorage.setItem("tamanho", tamanho);
    }

    meio.style.fontSize = localStorage.getItem("tamanho");

    let espacamentoLinhas = document.querySelectorAll('#line-height button');

    for (let i = 0; i < espacamentoLinhas.length; i += 1){
        espacamentoLinhas[i].addEventListener('click', mudaEspacoLinhas);
    }

    function mudaEspacoLinhas(event) {
        let espaco = event.target.innerText;
        meio.style.lineHeight = espaco;
        localStorage.setItem("espaco", espaco);
    }
    meio.style.lineHeight = localStorage.getItem("espaco");

    let fontFamily = document.querySelectorAll('#font-family button');

    for (let i = 0; i < fontFamily.length; i += 1){
        fontFamily[i].addEventListener('click', mudaFonteFamily);
    }

    function mudaFonteFamily(event) {
        let family = event.target.innerText;
        meio.style.fontFamily = family;
        localStorage.setItem("family", family);
    }
    meio.style.fontFamily = localStorage.getItem("family");



}




