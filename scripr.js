const contact = document.querySelector('.header-contact'); 
const form = document.querySelector('.form-container');
const home = document.querySelector('.header-home');
const body = document.querySelector('body');
let isRotated = false;
const headerMenu = document.querySelector('.header-menu');
const formButton = document.querySelector('.form-btn');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBlockTwo = document.querySelector('.menu-block.two');
const menuBlockOne = document.querySelector('.menu-block.one');
const menuBtnX = document.querySelector('.menu-btn-x');


menuBtn.addEventListener("click", () =>{
    headerMenu.style.color = '#90E051';
    home.style.color = 'black';
    menu.style.width = '1400px';
    menu.style.alignItems = 'end'; 
    menu.style.transition = '500ms'
    menu.style.padding = '20px'
    menuBlockTwo.style.opacity = '1';
    menuBlockOne.style.margin = '0';
    menuBlockTwo.style.margin = '0';
    menuBlockOne.style.opacity = '1';
    menuBtn.style.display = 'none';
    menuBtnX.style.display = 'block';

}) 



contact.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!isRotated) {
        contact.style.color = '#90E051';
        home.style.color = 'black';
        form.style.transform = "scale(1.5)";
        isRotated = true;
    } else {
        form.style.transition = "scale(1)";
        form.style.transform = "scale(0)";
        home.style.color = '#90E051';
        contact.style.color = 'black';
        isRotated = false;
    }
});

form.addEventListener('click', (event) => {
    event.stopPropagation();
});

menuBtnX.onclick = () => {
    home.style.color = '#90E051';
    menu.style.width = '550px';
    menuBtnX.style.display = 'none';
    menuBtn.style.display = 'block';
    menuBlockTwo.style.opacity = '0.55';
    menuBlockOne.style.opacity = '0.8';
    menuBlockTwo.style.margin = '20px';
    headerMenu.style.color = 'black';

}

document.body.addEventListener('click', () => {
    if (isRotated) {
        home.style.color = '#90E051';
        form.style.transform = "scale(0)";
        contact.style.color = 'black';
        isRotated = false;
        
    }
});
