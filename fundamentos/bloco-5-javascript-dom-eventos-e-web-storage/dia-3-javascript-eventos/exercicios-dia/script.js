function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //1)
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
let ulDays = document.getElementById('days');

for (let i = 0; i < dezDaysList.length; i += 1){
    let item = dezDaysList[i];
    let liDay = document.createElement('li');
    liDay.innerHTML = item;
    liDay.className = 'day'

    if (item === 24 || item === 25 || item === 31) {
        liDay.className += ' holiday';
    }

    if (item === 4 || item === 11 || item === 18 || item === 25) {
        liDay.className += ' friday';
    }

    ulDays.appendChild(liDay);
}

//2)
let buttonsContainer = document.getElementsByClassName('buttons-container')[0];
let palavra = 'Feriados';

function holiday(palavra) {
    let btn = document.createElement('button')
    btn.id = 'btn-holiday';
    btn.innerHTML = palavra;
    buttonsContainer.appendChild(btn);
}

holiday(palavra);

//3)
let btn = document.getElementById('btn-holiday');
let classHoliday = document.querySelectorAll('.holiday');
btn.addEventListener('click', mudaCor);

function mudaCor() {
    
    for (let i = 0; i < 3; i += 1) {
        
        if (classHoliday[i].style.background == 'white') {
            classHoliday[i].style.background = ''
        } else {
            classHoliday[i].style.background = 'white';
        }
    }   
     
}

//4)
let palavra2 = 'Sexta-feira';
function friday() {
    let btn2 = document.createElement('button');
    btn2.id = 'btn-friday';
    btn2.innerHTML = palavra2;
    buttonsContainer.appendChild(btn2);
}

friday(palavra2);

//5)
let btn2 = document.getElementById('btn-friday');
let classFriday = document.querySelectorAll('.friday');

btn2.addEventListener('click', mudaTexto);

function mudaTexto() {

    let num = [4, 11, 18, 25];
    for (let i = 0; i < 4; i += 1){

        if (classFriday[i].innerHTML == 'Sexta-feira!') {
            classFriday[i].innerHTML = num[i];
        } else {
            classFriday[i].innerHTML = 'Sexta-feira!';
        }

    }
}

//6)
ulDays.addEventListener('mouseover', aumentar);

function aumentar(event) {
    event.target.style.fontSize = '26px';
}

ulDays.addEventListener('mouseout', diminuir);

function diminuir(event) {
    event.target.style.fontSize = '20px';
}

//7)
let espacoTarefa = document.getElementsByClassName('my-tasks')[0];

function addTarefa(tarefa) {
    let item = document.createElement('span');
    item.innerHTML = '<br>' + tarefa;
    espacoTarefa.appendChild(item);
}
addTarefa('Cozinhar'); 



//8)
function addCor(cor) {
    let item2 = document.createElement('div');
    item2.style.background = cor;
    espacoTarefa.appendChild(item2);
}

addCor('green');

addTarefa('Estudar');
addCor('purple');

//9)
espacoTarefa.addEventListener('click', tarefaSelecionada);

function tarefaSelecionada(event) {
    if (event.target.className == 'task selected') {
        event.target.className = '';
    } else {
        event.target.className = 'task selected'
    }
    
}
//10)
ulDays.addEventListener('click', mudaCorTatefa);

function mudaCorTatefa() {
    
}