let contatos = []; //lista de contatos vazio 

//pegando os elementos do html pelo ID deles para usar no Js
const form = document.getElementById("formContato");
const btnMostrar = document.getElementById("mostrarContatos");
const btnLimpar = document.getElementById("limparHistorico");
const lista = document.getElementById("listaContatos");

form.addEventListener('submit', e => { //função que roda quando é clicado no botão de enviar o formulário 
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "") {  //se nome ou email estiverem vazios, para 
        alert("Preencha seu nome e email!");
        return;
    }

    const contato = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    contatos.push(contato); //add contato dentro do array que foi criado 

    alert(`Obrigado por entrar em contato, ${nome}!`);

    form.reset();

});

btnMostrar.addEventListener("click", function () {
    lista.innerHTML = "";

    if (contatos.length === 0) {
        lista.innerHTML = "<p class='text-red-500 text-center'>Nenhum contato foi salvo ainda!</p>";
        return;
    }

    contatos.forEach(function (contato) {  //percorrendo o array de contatos e aparecendo um card para cada um
 
        lista.innerHTML += `

            <div class="border rounded-lg p-4 bg-gray-100 shadow">
                <h3 class="font-bold text-lg"> ${contato.nome} </h3>
                <p> ${contato.email} </p>
                <p class="text-gray-600"> ${contato.mensagem} </p>
            </div>
        `;
    });

});

btnLimpar.addEventListener("click", function () {
    contatos = []; //esvaziando o array 
    lista.innerHTML = "";

    alert("Histórico apagado.");

});