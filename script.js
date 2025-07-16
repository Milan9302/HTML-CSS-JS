const menu = document.getElementById('main');
const navBtn = document.querySelector('.navBtn');
const overlay = document.getElementById('overlay');
const closeMenuBtn = document.getElementById('closeMenu');

navBtn.addEventListener('click', () => {
    menu.classList.add('active');
    overlay.classList.add('show');
});

closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('show');
});