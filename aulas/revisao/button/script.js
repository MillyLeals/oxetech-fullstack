const botao = document.getElementById('button');
let escuro = true;

botao.addEventListener('click', () => {
   if (escuro === true) {
        document.body.style.backgroundColor = '#BDBDBD';
        escuro = false;
   } else {
    document.body.style.backgroundColor = '#1a1a1a';
    escuro = true;
   }
    
});