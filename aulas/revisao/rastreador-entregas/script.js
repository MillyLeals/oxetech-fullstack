const inputCep = document.getElementById('cep');
const botao = document.getElementById('buscar');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', async () => {

    const cepInformado = inputCep.value.trim();

    if (cepInformado.length !== 8) {
        alert('O CEP deve conter 8 números');
    return;
    }

    resultado.innerHTML =
        `<p class="text-[#757575] text-center">Buscando endereço...</p>`;

    try {

        const url = `https://viacep.com.br/ws/${cepInformado}/json/`;
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (dados.erro) {
            resultado.innerHTML =
                `<p class="text-red-500 text-center font-bold">CEP não encontrado.</p>`;
            return;
        }

        const cardHTML = `
            <div class="bg-[#000000] border border-[#333333] rounded-xl p-6">
                <h2 class="text-xl font-bold text-[#BDBDBD] mb-4">
                    Endereço Localizado
                </h2>

                <p class="text-[#757575]">Rua:</p>
                <p class="text-[#BDBDBD] mb-3"> ${dados.logradouro} </p>

                <p class="text-[#757575]">Bairro:</p>
                <p class="text-[#BDBDBD] mb-3"> ${dados.bairro} </p>

                <p class="text-[#757575]">Cidade:</p>
                <p class="text-[#BDBDBD]"> ${dados.localidade} - ${dados.uf} </p>
            </div>
        `;

        resultado.innerHTML = cardHTML;
        inputCep.value = '';

    } catch(erro) {
        console.error(erro);
        
        resultado.innerHTML =
            `<p class="text-red-600 text-center">Erro ao conectar com o servidor.</p>`;
    }

});