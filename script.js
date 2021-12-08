const checkbox = document.querySelector('#agreement');
const btnLogin = document.querySelector('.submit');
const btnSubmit = document.querySelector('#submit-btn');
const form = document.querySelector('#evaluation-form');
btnSubmit.disabled = true;

function validaEmailSenha(event) {
  const email = document.querySelector('.email');
  const senha = document.querySelector('.password');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  event.preventDefault();
}
btnLogin.addEventListener('click', validaEmailSenha);

function habilitaBotao() {
  btnSubmit.disabled = true;
  if (checkbox.checked) {
    btnSubmit.disabled = false;
  }
}

function ciraParagrafoNomeSobrenome() {
  const InputName = document.querySelector('#input-name');
  const InputLastNAme = document.querySelector('#input-lastname');
  const texto = document.createElement('p');
  texto.innerHTML = `Nome: ${InputName.value} ${InputLastNAme.value} `;
  form.appendChild(texto);
}

function criaParagrafoMaterias() {
  const checkboxChecked = document.querySelectorAll('[class=subject]:checked');
  const materias = [];
  const texto = document.createElement('p');
  for (let index = 0; index < checkboxChecked.length; index += 1) {
    materias.push(checkboxChecked[index].value);
  }
  const strMaterias = materias.join(', ');
  texto.innerHTML = `Matérias: ${strMaterias}`;
  form.appendChild(texto);
}

function criaParagrafo(campo, valor) {
  const texto = document.createElement('p');
  texto.innerHTML = `${campo}: ${valor.value}`;
  form.appendChild(texto);
}

checkbox.addEventListener('change', habilitaBotao);

function substituiForms(event) {
  event.preventDefault();

  const forms = document.querySelectorAll('.container');
  for (let index = 0; index < forms.length; index += 1) {
    forms[index].style.display = 'none';
  }

  ciraParagrafoNomeSobrenome();
  criaParagrafo('Email', document.querySelector('#input-email'));
  criaParagrafo('Casa', document.querySelector('#house'));
  criaParagrafo('Família', document.querySelector('input[name="family"]:checked'));
  criaParagrafoMaterias();
  criaParagrafo('Avaliação', document.querySelector('input[name="rate"]:checked'));
  criaParagrafo('Observações', document.querySelector('#textarea'));
  const main = document.querySelector('main');
  main.className = "infos";
}

btnSubmit.addEventListener('click', substituiForms);

// Adiciona dinamicamente o sistema de 'rate'
// function ratingOptions() {
//   for (let i = 0; i <= 10; i += 1) {
//     const elemDiv = document.querySelector('.rate');
//     const elemLabel = document.createElement('label');
//     const elemInput = document.createElement('input');

//     elemLabel.setAttribute('for', 'rate');
//     elemInput.setAttribute('type', 'radio');
//     elemInput.setAttribute('name', 'rate');
//     elemInput.setAttribute('value', i);

//     elemLabel.appendChild(elemInput);
//     elemDiv.appendChild(elemLabel);
//     elemLabel.innerHTML += i;
//   }
// }
// window.onload = ratingOptions;

// Testes para o contador de caracteres na caixa de texto.
// Precisa encontrar um jeito de o placeholder não sumir ao começar a digitar
// const textArea = document.querySelector('#textarea');

// function charCounter () {
//   textArea.placeholder = 500 - textArea.value.length;
//   console.log(textArea.placeholder);
// }
// textArea.addEventListener('keyup', charCounter);
