const projects = [
    { title: 'AnemiaCalc', status: 'Concluído' },
    { title: 'SafeID', status: 'Em Andamento' },
    { title: 'Portfólio', status: 'Pausado' }
];

const container = document.getElementById('cards-projects');

container.innerHTML = '';

projects.forEach((project) => {
    
    //fundo #000000, bordas e textos em tons de cinza até #BDBDBD
    const cardHTML = `
        <div class="bg-[#000000] border border-[#333333] rounded-lg p-6 transition-all duration-200 hover:border-[#BDBDBD] hover:-translate-y-1">
            <h2 class="text-xl font-bold text-[#BDBDBD] mb-3 uppercase tracking-wider">
                ${project.title}
            </h2>
            <div class="h-px bg-[#333333] w-full mb-4"></div> <p class="text-sm text-[#757575]">
                Status atual: 
                <span class="font-semibold text-[#A0A0A0]">${project.status}</span>
            </p>
        </div>
    `;

    container.innerHTML += cardHTML;
});