const modalFormacao = document.getElementById("modal-formacao");
const btnAbrirModal = document.getElementById("open-formacao");
const btnFecharModal = document.querySelector(".close-modal");

const menuMobile = document.querySelector('.nav-links');
const btnMenu = document.querySelector('.hamburger');

btnAbrirModal.addEventListener("click", (e) => {
    e.preventDefault();
    modalFormacao.style.display = "flex";

    btnMenu.classList.remove('active');
    menuMobile.classList.remove('active');
});

btnFecharModal.addEventListener("click", () => {
    modalFormacao.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modalFormacao) {
        modalFormacao.style.display = "none";
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modalFormacao.style.display = "none";
    }
});