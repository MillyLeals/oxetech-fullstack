const carrinhoCompras = [
    {nome: 'Luva', preco: 49.90},
    {nome: 'Touca', preco: 59.90},
    {nome: 'Casaco', preco: 249.90},
    {nome: 'Camisa Térmica', preco: 89.90}
];

const lista = document.querySelector('#lista-produtos');
const resultado = document.querySelector('#total');

let total = 0; 

carrinhoCompras.forEach((produto) => {
    const item = document.createElement('li');
    item.textContent = `${produto.nome} - R$ ${produto.preco}`
    lista.appendChild(item);
    total += produto.preco;
});

resultado.textContent = `O total da compra é: R$ ${total}`;
