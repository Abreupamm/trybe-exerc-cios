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

//   Exercício 1:

function criaDiaMes() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let ulDays = document.getElementById('days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let numero = dezDaysList[i];
    let criaDia = document.createElement('li');
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      criaDia.classList.add('holiday');
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) {
      criaDia.classList.add('friday');
    }
    criaDia.classList.add('day')
    criaDia.innerHTML = numero;
    ulDays.appendChild(criaDia)
  }
}
criaDiaMes();

// Exercício 2:

let feriados = 'FERIADOS';
function feriadosMes(s) {
  let div = document.querySelector('.buttons-container');
  let butttom = document.createElement('button');
  butttom.innerText = s
  butttom.id = 'btn-holiday';
  div.appendChild(butttom);
}
feriadosMes(feriados);

// Exercício 3:

let botao = document.querySelector('#btn-holiday');
function selectFeriados() {
  let diasCor = document.querySelectorAll('.holiday');
  for (let i = 0; i < diasCor.length; i += 1) {
    let item = document.getElementsByClassName('holiday')[i];
    item.style.backgroundColor = 'white';
  }
  function selectFeriados1() {
    let diasCor = document.querySelectorAll('.holiday');
    for (let i = 0; i < diasCor.length; i += 1) {
      let item = document.getElementsByClassName('holiday')[i];
      item.style.backgroundColor = 'rgb(238,238,238)';
    }

  }
  botao.addEventListener('click', selectFeriados1);

}
botao.addEventListener('click', selectFeriados);

// Exercício 4:

let sextou = 'SEXTA-FEIRA';
function diasSextou(sexta) {
  let div = document.querySelector('.buttons-container');
  let butttom = document.createElement('button');
  butttom.innerText = sexta;
  butttom.id = 'btn-friday';
  div.appendChild(butttom);
}
diasSextou(sextou);

// Exercício 5:

let botao1 = document.querySelector('#btn-friday');
function selectSextou() {
  let diaSexta = document.querySelectorAll('.friday');
  let numer = [];
  for (let i = 0; i < diaSexta.length; i += 1) {
    let item = document.getElementsByClassName('friday')[i];
    let textOrigin = item.innerText;
    numer.push(textOrigin);
    item.innerText = 'SEXTOU';
  }
  function selectSextou1() {
    let diaSexta = document.querySelectorAll('.friday');
    for (let i = 0; i < diaSexta.length; i += 1) {
      let item = document.getElementsByClassName('friday')[i];
      item.innerText = numer[i];
    }

  }
  botao1.addEventListener('click', selectSextou1);

}
botao1.addEventListener('click', selectSextou);

// Exercício 6:

function destaque() {
  let todosDias = document.querySelector('#days');
  todosDias.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
  });
}
function remove() {
  let todosDias = document.querySelector('#days');
  todosDias.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
  });
}
destaque();
remove();
// Exercício 7:


function addTarefa(nome) {
  let tag = document.createElement('span');
  tag.innerHTML = nome;
  let dvp = document.getElementsByClassName('my-tasks')[0];
  dvp.appendChild(tag);
}
addTarefa('Tarefa');

// Exercício 8:

function tarefaCor(cor) {
  let tagDiv = document.createElement('div');
  tagDiv.classList.add('task');
  tagDiv.style.backgroundColor = cor;
  let pdv = document.getElementsByClassName('my-tasks')[0];
  pdv.appendChild(tagDiv);
}
tarefaCor('purple')

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este
//  elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa 
// selecionada.
function addTarefa(){
  
}

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua
//  tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .


// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", 
// adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: key .

