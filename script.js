let btnButton = document.querySelector(".submit");

btnButton.addEventListener("click", validaEmailSenha);

function validaEmailSenha(event){
    let email = document.querySelector(".email");
    let senha = document.querySelector(".password")
    if(email.value === 'tryber@teste.com' && senha.value === '123456'){
        alert("Olá, Tryber!");
    }else {
        alert("Email ou senha inválidos.");
    }
    event.preventDefault();
}
