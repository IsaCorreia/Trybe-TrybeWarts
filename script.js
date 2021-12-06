const checkbox = document.querySelector('#agreement');
const btnLogin = document.querySelector('.submit');
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
btnLogin.addEventListener('click', validaEmailSenha);

function habilitaBotao() {
  btnSubmit.disabled = true;
  if (checkbox.checked) {
    btnSubmit.disabled = false;
  }
}
checkbox.addEventListener('change', habilitaBotao);

btnSubmit.addEventListener("click", substituiForms);

function substituiForms (){
    let forms =  document.querySelector('#evaluation-form');
    forms.style.display =  'none';
    let texto = document.createElement("p");
    let nome = document.querySelector("#input-name");
    texto.innerHTML = `Nome: ${nome.value}`;
    document.getElementsByTagName("main")[0].appendChild(texto);
}