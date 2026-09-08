const car = document.querySelector('.car');
const content = document.querySelector('.content');
const footer = document.querySelector('.footer');

car.addEventListener('animationend', () => {
    content.classList.add('show');
    footer.classList.add('show');
});