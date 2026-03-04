window.addEventListener("DOMContentLoaded", () => {
    const animados = document.querySelectorAll('.container p, .container h1, .infos-box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0 }); // threshold 0 garante que dispare assim que tocar a viewport

    animados.forEach(el => observer.observe(el));

    // Garantir que elementos no topo da página apareçam imediatamente
    animados.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight){
            el.classList.add('visible');
        }
    });
});