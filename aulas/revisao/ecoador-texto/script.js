const inputText = document.querySelector('#input-value');
const paragrafo = document.querySelector('#result');

inputText.addEventListener('input', () => {
    paragrafo.textContent = inputText.value;
})