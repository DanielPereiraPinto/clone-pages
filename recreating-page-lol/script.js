const inputs = document.querySelectorAll('.input');

const focar = ({target}) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}
const focarOut = ({target}) => {
    if(target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

inputs.forEach((input) => input.addEventListener('focus', focar));
inputs.forEach((input) => input.addEventListener('focusout', focarOut));