const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggles active no botão
    navLinks.classList.toggle('active');  // Toggles active no menu
});

const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', () => {
        // Quando clicar em qualquer link, remove o "active" de tudo
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});