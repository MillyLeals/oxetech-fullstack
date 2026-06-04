const button = document.querySelector('#magic');
const square = document.querySelector('.square');

button.addEventListener('click', () => {
     if (square.style.display === 'none') {
        square.style.display = 'block';
    } else {
        square.style.display = 'none';
    }
})