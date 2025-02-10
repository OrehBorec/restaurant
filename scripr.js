const contact = document.querySelector('.header-contact'); 
const form = document.querySelector('.form-container');
const home = document.querySelector('.header-home');
let isRotated = false;
const formButton = document.querySelector('.form-btn');

contact.addEventListener('click', () => {
    if (!isRotated) {
        contact.style.color = '#90E051';
        home.style.color = 'black';
        form.style.display = 'block';
        isRotated = true;
    } else {
        form.style.display = 'none';
        home.style.color = '#90E051';
        contact.style.color = 'black';
        isRotated = false;
    }
});

home.addEventListener('click', () => {
    form.style.display = 'none';
    home.style.color = '#90E051';
    contact.style.color = 'black';
    isRotated = false;
});

formButton.addEventListener('click', () => {
    form.style.display = 'none';
    alert('Отправлено!');
});