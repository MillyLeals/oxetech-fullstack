const botaoBuscar = document.getElementById('buscar');

async function buscarEndereco() {

    try {
        console.log("Buscando...");

    const resposta = await fetch('https://viacep.com.br/ws/57020000/json/');
    const dados = await resposta.json();

    console.log('Nome da rua: ', dados.logradouro);

    } catch(erro) {
        console.error("Ocorreu um erro", erro);
    }
}

botaoBuscar.addEventListener('click', buscarEndereco);