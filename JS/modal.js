// modal.js
const modalFormacao = document.getElementById("modal-formacao");
const btnAbrirModal = document.getElementById("open-formacao");
const btnFecharModal = document.querySelector(".close-modal");

// Seleção única para fechar o menu ao abrir o modal
const menuMobile = document.querySelector('.nav-links');
const btnMenu = document.querySelector('.hamburger');

btnAbrirModal.addEventListener("click", (e) => {
    e.preventDefault();
    modalFormacao.style.display = "flex";

    // Resolve a interferência: Fecha o menu se estiver aberto
    btnMenu.classList.remove('active');
    menuMobile.classList.remove('active');
});

btnFecharModal.addEventListener("click", () => {
    modalFormacao.style.display = "none";
});

// Fechar ao clicar fora
window.addEventListener("click", (event) => {
    if (event.target == modalFormacao) {
        modalFormacao.style.display = "none";
    }
});

// Fechar com ESC
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modalFormacao.style.display = "none";
    }
});