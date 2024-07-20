document.addEventListener('DOMContentLoaded', function() {

});

let heightModal;
const windowHeight = window.innerHeight;
const modalButton = document.querySelector('.burger');
const burgerLines = modalButton.querySelectorAll('.burder-line');
const burgerMenu = document.querySelector('.burger__menu');

const perplButton = document.querySelector('.burder__list-item a .perpl');

let modalIsOpen = false;
const headerCont = document.querySelector('.header__container')

modalButton.addEventListener('click', function() {
    if (modalIsOpen) {
        
        modalIsOpen = false;
        document.querySelector('body').style.overflowY = 'auto';
        
        
        burgerLines[0].style.transform = 'translateY(0%) rotate(0deg)';
        burgerLines[2].style.transform = 'translateY(0%) rotate(0deg)';
        burgerLines[1].style.transform = 'scale(1)';
        setTimeout(() => {
            burgerMenu.style.display = 'none';
        }, 10);
    } else {
        
        modalIsOpen = true;
        document.querySelector('body').style.overflowY = 'hidden';
        burgerMenu.style.display = 'block';
        heightModal = document.querySelector('.burger__menu').offsetHeight
        burgerLines[0].style.transform = 'translateY(300%) rotate(45deg)';
        burgerLines[2].style.transform = 'translateY(-300%) rotate(-45deg)';
        burgerLines[1].style.transform = 'scale(0)';
    }
});

perplButton.addEventListener('click', function() {
    window.location.href = '../form.html';
});
console.log(window.innerHeight);
console.log(window.innerWidth);

document.querySelectorAll('.footer__list-item a')[0].addEventListener('click', () => alert('version:8'))