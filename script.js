const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senhaConfirm = document.getElementById('senha-confirm')

form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs(){
  const usernameValue = username.value;
  const emailValue = email.value;
  const senhaValue = senha.value;
  const senhaConfirmValue = senhaConfirm.value;

  if(usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if(emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if(senhaValue === "") {
    setErrorFor(senha, "A senha é obrigatório.");
  } else if (senhaValue.length < 7) {
    setErrorFor(senha, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(senha);
  }

  if(senhaConfirmValue === "") {
    setErrorFor(senhaConfirm, "A senha é obrigatório.");
  } else if (senhaConfirmValue !== senhaValue) {
    setErrorFor(senhaConfirm, "As senhas não conferem.");
  } else {
    setSuccessFor(senhaConfirm);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adicionar a mensagem de erro 
  small.innerText = message;

  // Adicionar a classe de erro 
  formControl.className = "form-control error";
}

function setSuccessFor(input){
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso 
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
