const linguagens = ['JavaScript', 'Java', 'Ruby', 'Python', 'C#'];

const listaUL = document.querySelector('#lista');

linguagens.forEach((linguagem) => {
    const novoItem = document.createElement('li');
    novoItem.textContent = linguagem;
    listaUL.appendChild(novoItem);
});