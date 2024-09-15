const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// Isso ocorre porque o style esta definido na class 'tech' e essa classe está atribuida na primeira caixa

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener('click', addClass);
secondLi.addEventListener('click', addClass);
thirdLi.addEventListener('click', addClass);


function addClass(evento) {
  let idEvento = evento.target;
  firstLi.classList.remove('tech');
  secondLi.classList.remove('tech');
  thirdLi.classList.remove('tech');
  if (firstLi == idEvento) {
    firstLi.classList.add('tech');
  } else if (secondLi == idEvento) {
    secondLi.classList.add('tech');
  } else if (thirdLi == idEvento) {
    thirdLi.classList.add('tech');
  }
}


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function alteraTec() {
  let classeTech = document.querySelector('.tech');
  classeTech.innerText = input.value
}

input.addEventListener('keyup', alteraTec);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
function redirecionar() {
  let pai = document.querySelector('main');
  let linck = document.createElement('a');
  linck.id = 'my-spotrybefy';
  linck.innerText = 'Meu top 3 do Spotrybefy';
  linck.href = 'https://github.com/Abreupamm';
  pai.insertAdjacentElement('afterbegin', linck);
  myWebpage.remove();
  let linckCriado = document.getElementById('my-spotrybefy')
  linckCriado.style.textDecoration = 'none';
  //afterbegin: dentro do elemento, no início antes do primeiro filho.
}

myWebpage.addEventListener('click', redirecionar);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy',
//  altere
// a cor do mesmo;

let text = document.getElementById('my-spotrybefy');
function mudaCor (){
  text.style.color = 'blue';
}
text.addEventListener('mousemove', mudaCor)


// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.