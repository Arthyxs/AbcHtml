// Muda o tema da página (claro/escuro)
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-theme");
}

// Exibe/oculta a navegação (útil para telas pequenas ou menus interativos)
function toggleNav() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("hidden");
}

// Anima a tabela ao carregar a página (apenas exemplo de animação)
window.addEventListener("load", function () {
    const table = document.querySelector("table");
    table.style.opacity = "0";
    table.style.transition = "opacity 1s";
    setTimeout(() => {
        table.style.opacity = "1";
    }, 100);
});

// Mostra uma mensagem de boas-vindas ao usuário quando a página for carregada
window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        alert("Bem-vindo à página! Explore os recursos e divirta-se!");
    }, 500);
});

// Exemplo de alterar o fundo do header ao clicar em um botão
function changeHeaderBackground() {
    const header = document.querySelector("header");
    const colors = ["#FF6347", "#4682B4", "#32CD32", "#FFD700", "#8A2BE2"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    header.style.backgroundColor = randomColor;
}

// Função para animar os links no hover
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.1)";
        link.style.transition = "transform 0.2s ease-in-out";
    });
    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });
});
