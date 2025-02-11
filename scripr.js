const contact = document.querySelector('.header-contact'); 
const form = document.querySelector('.form-container');
const home = document.querySelector('.header-home');
const body = document.querySelector('body');
let isRotated = false;
const formButton = document.querySelector('.form-btn');

contact.addEventListener('click', (event) => {
    event.stopPropagation();
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

form.addEventListener('click', (event) => {
    event.stopPropagation();
});


document.body.addEventListener('click', () => {
    if (isRotated) {
        form.style.display = 'none';
        home.style.color = '#90E051';
        contact.style.color = 'black';
        isRotated = false;
    }
});
