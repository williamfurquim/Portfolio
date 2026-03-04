window.addEventListener("load", () => {
    // Remove qualquer hash da URL ao carregar
    if(window.location.hash){
        history.replaceState(null, null, ' '); // limpa #projetos
    }
    window.scrollTo(0,0); // garante que a página inicie no topo
});

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const titulo = document.getElementById("projeto-titulo");
const descricao = document.getElementById("projeto-descricao");
const logo = document.getElementById("projeto-logo");

let index = 0;

const projetos = [
    {
        titulo: "ConnectPolo",
        descricao: "Sistema web de gestão e acompanhamento de jovens aprendizes desenvolvido para a Marcopolo, permitindo que líderes monitorem o desempenho e mantenham comunicação centralizada com os seus estudantes. Desenvolvido com HTML, CSS e JavaScript, utilizando o banco de dados Firebase para autenticação e armazenamento de dados, com controle de acesso por perfil e interface totalmente responsiva.",
        logo: "./img/ConnectPolo.png"
    },
    {
        titulo: "Robótica",
        descricao: "Interface gráfica para controle e monitoramento em tempo real de sensores robóticos utilizando ESP32 com comunicação via Wi-Fi. Desenvolvida com HTML, CSS e JavaScript para interação dinâmica com o dispositivo, enquanto o firmware em C++ gerencia leitura de sensores e acionamento de atuadores. O sistema abstrai a complexidade do código embarcado por meio de uma interface web responsiva e intuitiva.",
        logo: "./img/Robótica.png"
    },
    {
        titulo: "Proximity",
        descricao: "Aplicativo web inovador que potencializa a comunicação e o engajamento em comunidades, oferecendo funcionalidades como troca de itens entre vizinhos, alertas inteligentes em tempo real com integração à API do Google Maps, e um mural interativo de notícias e eventos locais. Desenvolvido com HTML, CSS e JavaScript, o projeto também conta com suporte a PWA, garantindo uma experiência dinâmica, responsiva e acessível em qualquer dispositivo.",
        logo: "./img/Proximity.png"
    },
    {
        titulo: "BotStation",
        descricao: "Aplicação fullstack de cadastro de usuários desenvolvida com React, TypeScript e Node. Utiliza Supabase para autenticação, persistência de dados e controle de sessão. Cada card contém nome, email, idade e uma imagem aleatória de robô gerada dinamicamente. Integra-se front-end moderno com API RESTful e banco de dados em tempo real. Demonstra boas práticas de tipagem estática, componentes reutilizáveis e fluxo completo de autenticação e autorização.",
        logo: "./img/BotStation.png"
    },
    {
        titulo: "Void Arena",
        descricao: "Jogo MOBA 4x4 2D desenvolvido com JavaScript puro e HTML5 Canvas. Foco em lógica de jogo, inteligência artificial e programação orientada a objetos, permitindo que o jogador controle um personagem enquanto aliados e inimigos são gerenciados por IA estratégica. Cada classe possui comportamento específico. O sistema inclui cooldowns, colisão por distância, efeitos visuais e loop principal de jogo com requestAnimationFrame.",
        logo: "./img/VoidArena.png"
    }
];

function mostrarSlide(i){
    slides.forEach((slide, idx)=>{
        const video = slide.querySelector("video");
        if(idx === i){
            slide.classList.add("active");
            if(video) video.play();
        } else {
            slide.classList.remove("active");
            if(video){
                video.pause();
                video.currentTime = 0;
            }
        }
    });

    const projeto = projetos[i];
    if(projeto){
        titulo.textContent = projeto.titulo;
        descricao.textContent = projeto.descricao;
        logo.src = projeto.logo;
        logo.alt = `Logo do projeto ${projeto.titulo}`;
    }
}

next.addEventListener("click",()=>{
    index = (index + 1) % slides.length;
    mostrarSlide(index);
});

prev.addEventListener("click",()=>{
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
});

// autoplay opcional
let autoSlide = setInterval(() => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
}, 8000);

[next, prev].forEach(btn => {
    btn.addEventListener("click", () => clearInterval(autoSlide));
});

mostrarSlide(index);