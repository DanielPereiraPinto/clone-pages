const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login__button');
let texto = document.querySelector('.span');

const focar = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
    texto.innerHTML = 'mínimo de 8 dígitos';
}
const focarOut = ({target}) => {
    if(target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
        texto.innerHTML = 'senha';
    }
}
const enableButton = () => {
    const [username, password] = inputs;
    if(username.value && password.value.length >= 8){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}
inputs.forEach((input) => input.addEventListener('focus', focar));
inputs.forEach((input) => input.addEventListener('focusout', focarOut));
inputs.forEach((input) => input.addEventListener('input', enableButton));