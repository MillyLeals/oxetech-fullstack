const inputPalavra = document.getElementById('palavra');
const botaoAdd = document.getElementById('adicionar');
const telaResult = document.getElementById('resultado');

let listaPalavras = [];

botaoAdd.addEventListener('click', () => {
    const palavra = inputPalavra.value.toLowerCase();
    
    if(palavra === 'bug' || palavra === 'erro') {
        alert("Essa palavra não pode ser adicionada na lista!");
    } else {
        listaPalavras.push(palavra);
    }
    
    telaResult.textContent = `[ ${listaPalavras.join(', ')} ]`;
    inputPalavra.value = '';
    inputPalavra.focus();

});
