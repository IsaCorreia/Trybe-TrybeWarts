const checkbox = document.querySelector('#agreement');
const btnButton = document.querySelector('.submit');
const btnSubmit = document.querySelector('#submit-btn');
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
btnButton.addEventListener('click', validaEmailSenha);

function habilita() {
  btnSubmit.disabled = true;
  if (checkbox.checked) {
    btnSubmit.disabled = false;
  }
}
checkbox.addEventListener('change', habilita);

// const textArea = document.querySelector('#textarea');

// function charCounter () {
//   textArea.placeholder = 500 - textArea.value.length;
//   console.log(textArea.placeholder);
// }
// textArea.addEventListener('keyup', charCounter);
