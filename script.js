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
    
    criaParagrafo("Nome", document.querySelector("#input-name"))
    criaParagrafo("Email", document.querySelector("#input-email"))
    criaParagrafo("Casa", document.querySelector("#house"))
    criaParagrafo("Família", document.querySelector('input[name="family"]:checked'));
    criaParagrafoMaterias();
    criaParagrafo("Avaliações",document.querySelector('input[name="rate"]:checked'))
    criaParagrafo("Observações", document.querySelector("#textarea"))
}

function criaParagrafoMaterias(){
  let checkbox = document.querySelectorAll('[class=subject]:checked')
  let materias = [];
  let texto = document.createElement("p");
  for (let index = 0; index < checkbox.length; index++) {
      materias.push(checkbox[index].value);
  }
  let strMAterias = materias.join(", ");
  console.log(strMAterias);
  texto.innerHTML = `Materias: ${strMAterias}`;
  document.querySelector("#infos").appendChild(texto);
}

function criaParagrafo(campo,valor){
  let texto = document.createElement("p");
  texto.innerHTML = `${campo}: ${valor.value}`;
  document.querySelector("#infos").appendChild(texto);
}

// Adiciona dinamicamente o sistema de 'rate'
function ratingOptions() {
  for (let i = 0; i <= 10; i += 1) {
    const elemDiv = document.querySelector('.rate');
    const elemLabel = document.createElement('label');
    const elemInput = document.createElement('input');

    elemLabel.setAttribute('for', 'rate');
    elemInput.setAttribute('type', 'radio');
    elemInput.setAttribute('name', 'rate');
    elemInput.setAttribute('value', i);

    elemLabel.appendChild(elemInput);
    elemDiv.appendChild(elemLabel);
    elemLabel.innerHTML += i;
  }
}
window.onload = ratingOptions;

// Testes para o contador de caracteres na caixa de texto.
// Precisa encontrar um jeito de o placeholder não sumir ao começar a digitar
// const textArea = document.querySelector('#textarea');

// function charCounter () {
//   textArea.placeholder = 500 - textArea.value.length;
//   console.log(textArea.placeholder);
// }
// textArea.addEventListener('keyup', charCounter);
