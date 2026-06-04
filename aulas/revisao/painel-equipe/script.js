const equipe = document.getElementById('equipe');
const urlAPI = 'https://randomuser.me/api/?results=4';

window.addEventListener('DOMContentLoaded', async () => {

    try {
        const resposta = await fetch(urlAPI);
        const dados = await resposta.json();

        equipe.innerHTML = '';

        dados.results.forEach((usuario) => {

            equipe.innerHTML += `
                <div class="bg-[#000000] border border-[#333333] p-8 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:border-[#BDBDBD] hover:-translate-y-2 hover:shadow-lg hover:shadow-white/5">

                    <img src="${usuario.picture.large}" alt="${usuario.name.first}"
                        class="w-24 h-24 rounded-full mb-5 border-2 border-[#757575] p-1 object-cover">

                    <h2 class="text-xl font-bold text-white mb-1"> ${usuario.name.first} ${usuario.name.last}</h2>
                    <p class="text-[#BDBDBD]"> ${usuario.location.country} </p>
                </div>
            `;
        });

    } catch(erro) {
        console.error(erro);

        equipe.innerHTML = `
            <p class="text-red-500 text-center"> Erro ao buscar usuários </p>`;
    }

});