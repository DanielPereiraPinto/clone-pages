const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');
let texto = document.querySelector('.span');

// object destruction do (event.target), fica assim ({ target })
//target.previousElementSibling  //acessa o elemento irmão anterior do target, o target é o input
const focar = ({target}) => {    
    const span = target.previousElementSibling;  
    span.classList.add('span-active');           // adiciona a class
}
const focarOut = ({target}) => {
    if(target.value === '') {           // se o input estiver vazio, pode remover a class
        const span = target.previousElementSibling;
        span.classList.remove('span-active');       // remove a class
        texto.innerHTML = 'senha';
    }
}

//verifica se os 2 inputs estão OK para habilitar o botão
const enableButton = () => {
    const [username, password] = inputs;   //coloca em uma variavel cada elemento do array
    if(username.value && password.value.length >= 8){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');  //setAttribute rebece 2 parâmetros, por isso 1 vazio
    }
}

//percorre cada elemento do array, e pra cada um cria um evento, que arremete a uma função
inputs.forEach((input) => input.addEventListener('focus', focar));
inputs.forEach((input) => input.addEventListener('focusout', focarOut));
inputs.forEach((input) => input.addEventListener('input', enableButton));
inputs[1].addEventListener ('focus', () =>  texto.innerHTML = 'mínimo de 8 dígitos');